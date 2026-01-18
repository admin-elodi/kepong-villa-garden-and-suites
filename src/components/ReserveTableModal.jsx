import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUtensils,
  FaFish,
  FaGlassCheers,
  FaLeaf,
  FaTimes,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import tableImage from "@/assets/images/tables.png";

/* ======================================================
   CONFIGURATION
====================================================== */

const WHATSAPP_NUMBER = "08162482304"; // ✅ ONE NUMBER ONLY
const SERVICE_FEE = 4500; // Service fee per table (already included in totals)

const BANK_DETAILS = {
  name: "Kepong Villa Garden and Suites",
  bank: "Wema Bank",
  account: "0125564025",
};

/* ======================================================
   TABLE PACKAGES
====================================================== */

const eventTables = [
  {
    id: "traditional",
    code: "IGF",
    name: "Traditional Igbo Feast",
    description: "Soulful Igbo classics, heavy swallow, ancestral depth",
    icon: <FaLeaf />,
    foodPrice: 18000,
    menu: [
      "Nsala Soup with Eba (2)",
      "Oha Soup with Poundo (2)",
      "Ukwa (1)",
      "Peppered Meat (2)",
      "Zobo Drink (4)",
    ],
  },
  {
    id: "seafood",
    code: "SFD",
    name: "Seafood Special",
    description: "Premium ocean indulgence, bold and luxurious",
    icon: <FaFish />,
    foodPrice: 25500,
    menu: [
      "Barbecue Fish (1)",
      "Snail (1)",
      "White Rice & Stew (1)",
      "Vegetable Soup (1)",
      "Zobo Drink (3)",
    ],
  },
  {
    id: "wedding",
    code: "WMB",
    name: "Wedding Mini-Banquet",
    description: "Elegant, celebratory, perfectly balanced",
    icon: <FaUtensils />,
    foodPrice: 20500,
    menu: [
      "Jollof Rice & Chicken (2)",
      "White Rice & Stew (2)",
      "Nsala Soup (1)",
      "Peppered Goat Meat (2)",
      "Zobo Drink (4)",
    ],
  },
  {
    id: "hangout",
    code: "CHG",
    name: "Chill & Grill Hangout",
    description: "Palm wine, peppered meat, relaxed Nsukka vibes",
    icon: <FaGlassCheers />,
    foodPrice: 15000,
    menu: [
      "Cow Leg (1)",
      "Fried Beef with Chips (1)",
      "Jollof Rice & Chicken (1)",
      "Nsukka Palm Wine (1)",
      "Abacha (1)",
      "Zobo Drink (3)",
    ],
  },
];

/* ======================================================
   HELPERS
====================================================== */

const toInternational = (phone) =>
  phone.startsWith("0") ? "234" + phone.slice(1) : phone;

const generateReference = (code) => {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `KVG-${code}-${rand}`;
};

/* ======================================================
   COMPONENT
====================================================== */

const ReserveTableModal = ({ isOpen, onClose }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [hostName, setHostName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [units, setUnits] = useState(1);
  const [sent, setSent] = useState(false);

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  if (!isOpen) return null;

  const selectedTable = eventTables.find(t => t.id === expandedId);

  const sendWhatsApp = () => {
    if (!hostName || !date || !time || !units || !selectedTable) {
      alert("Please complete all booking details.");
      return;
    }

    const reference = generateReference(selectedTable.code);

    const foodTotal = selectedTable.foodPrice * units;
    const serviceTotal = SERVICE_FEE * units;
    const grandTotal = foodTotal + serviceTotal;

    const message = encodeURIComponent(
`KEPONG EVENT / HANGOUT TABLE BOOKING

--------------------------------
BOOKING REFERENCE
${reference}
--------------------------------

CUSTOMER NAME / CORPORATE TABLE SPONSOR
${hostName}

DATE & TIME
${date} | ${time}

TABLE PACKAGE
${selectedTable.name}

NUMBER OF TABLES
${units}

--------------------------------
TOTAL AMOUNT PAYABLE
--------------------------------
₦${grandTotal.toLocaleString()}

--------------------------------
PAYMENT INSTRUCTIONS
--------------------------------
Bank: ${BANK_DETAILS.bank}
Account Name: ${BANK_DETAILS.name}
Account Number: ${BANK_DETAILS.account}

➡ Please make payment and SEND YOUR PROOF OF PAYMENT
   in this same WhatsApp chat.

➡ If you have any enquiries or need clarification,
   kindly CALL this number directly.

Kepong Villa Garden & Suites
`
    );

    window.open(
      `https://wa.me/${toInternational(WHATSAPP_NUMBER)}?text=${message}`,
      "_blank"
    );


    setSent(true);
  };

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/60 z-[999]"
        onClick={onClose}
      />

      <div
        className="fixed top-10 left-1/2 -translate-x-1/2 w-[94%] max-w-md
                   bg-black/90 backdrop-blur-xl rounded-xl
                   border border-white/20 p-6 z-[1000]
                   max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70"
        >
          <FaTimes />
        </button>

        <img
          src={tableImage}
          alt="Event Table Setup"
          className="w-full h-48 object-cover rounded-2xl mb-6"
        />

        <h3 className="text-center text-white tracking-widest mb-6">
          Event & Hangout Tables
        </h3>

        {eventTables.map(table => {
          const open = expandedId === table.id;
          const displayPrice = table.foodPrice + SERVICE_FEE;

          return (
            <div key={table.id} className="mb-4">
              <div
                onClick={() => setExpandedId(open ? null : table.id)}
                className={`p-4 rounded-2xl border cursor-pointer ${
                  open
                    ? "border-red-500 bg-red-500/10"
                    : "border-white/20"
                }`}
              >
                <div className="flex justify-between items-center text-white">
                  <div className="flex gap-3 items-center">
                    {table.icon}
                    <div>
                      <p className="font-semibold">{table.name}</p>
                      <p className="text-xs text-gray-400">
                        {table.description}
                      </p>
                    </div>
                  </div>
                  <p className="font-black text-yellow-300">
                    ₦{displayPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 bg-white/5 rounded-2xl p-4"
                  >
                    <ul className="text-sm text-gray-200 mb-4 space-y-1">
                      {table.menu.map(item => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>

                    {!sent ? (
                      <div className="space-y-4">
                        {/* 🔔 IMPORTANT NOTE */}
                        <p className="text-xs text-gray-400">
                          Please enter a name that matches the <strong>bank account name</strong> you will be paying from.
                          This helps us confirm your payment faster.
                        </p>

                        <input
                          placeholder="Customer Name / Corporate Table Sponsor"
                          value={hostName}
                          onChange={e => setHostName(e.target.value)}
                          className="w-full p-3 rounded-xl bg-black/40 text-white"
                        />

                        <div
                          onClick={() => dateRef.current?.showPicker()}
                          className="flex items-center gap-3 bg-black/40 p-3 rounded-xl cursor-pointer"
                        >
                          <FaCalendarAlt className="text-gray-400" />
                          <span className="text-white text-sm">
                            {date || "Select preferred date"}
                          </span>
                          <input
                            ref={dateRef}
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className="absolute opacity-0 pointer-events-none"
                          />
                        </div>

                        <div
                          onClick={() => timeRef.current?.showPicker()}
                          className="flex items-center gap-3 bg-black/40 p-3 rounded-xl cursor-pointer"
                        >
                          <FaClock className="text-gray-400" />
                          <span className="text-white text-sm">
                            {time || "Select preferred time"}
                          </span>
                          <input
                            ref={timeRef}
                            type="time"
                            value={time}
                            onChange={e => setTime(e.target.value)}
                            className="absolute opacity-0 pointer-events-none"
                          />
                        </div>

                        <input
                          type="number"
                          min="1"
                          value={units}
                          onChange={e => setUnits(Number(e.target.value))}
                          className="w-full p-3 rounded-xl bg-black/40 text-white"
                        />

                        <button
                          onClick={sendWhatsApp}
                          className="w-full bg-red-500 hover:bg-red-600
                                     text-white font-bold py-3 rounded-xl"
                        >
                          Proceed to Payment via WhatsApp
                        </button>
                      </div>
                    ) : (
                      <div className="text-center text-green-400 py-6">
                        <FaCheckCircle className="mx-auto text-3xl mb-2" />
                        <p className="font-semibold">
                          Booking Sent Successfully
                        </p>
                        <p className="text-sm text-gray-400">
                          Kindly complete payment and follow the instructions on WhatsApp.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>,
    document.body
  );
};

export default ReserveTableModal;
