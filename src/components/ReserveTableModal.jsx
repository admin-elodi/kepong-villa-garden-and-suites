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

import tableImage from "@/assets/images/greyt.webp";
import nblBg from "@/assets/images/nbl.png";
import aquaImg from "@/assets/images/aqua.jpeg";

/* ================= CONFIG ================= */

const WHATSAPP_NUMBER = "08162482304";

const NBL_BUNDLE = 7200;
const JUNGLEX_FEE = 4500;
const PALM_WINE = 5000;
const WATER = 2000;

const ADD_ON_TOTAL =
  NBL_BUNDLE + JUNGLEX_FEE + PALM_WINE + WATER;

const BANK_DETAILS = {
  name: "Kepong Villa Garden and Suites",
  bank: "Wema Bank",
  account: "0125564025",
};

/* ================= TABLE PACKAGES ================= */

const eventTables = [
  {
    id: "traditional",
    code: "IGF",
    name: "Traditional Igbo Feast",
    icon: <FaLeaf />,
    foodPrice: 26000,
    menu: [
      "Nsala (2)",
      "Vegetable Soup (2)",
      "Abacha (1)",
      "White Rice & Stew (2)",
      "Peppered Goat Meat (2)",
      "Zobo Drink (4)",
    ],
  },

  {
    id: "seafood",
    code: "SFD",
    name: "Seafood Special",
    icon: <FaFish />,
    foodPrice: 28000,
    menu: [
      "Barbecue Fish with Chips (1)",
      "White Rice & Stew (1)",
      "Vegetable Soup (1)",
      "Zobo Drink (4)",
    ],
  },

  {
    id: "wedding",
    code: "WMB",
    name: "Wedding Mini-Banquet",
    icon: <FaUtensils />,
    foodPrice: 17000,
    menu: [
      "Jollof Rice & Chicken (2)",
      "White Rice & Stew (2)",
      "Egusi Soup (1)",
      "Fried Beef & Chips (1)",
      "Zobo Drink (4)",
    ],
  },

  {
    id: "hangout",
    code: "CHG",
    name: "Chill & Grill Hangout",
    icon: <FaGlassCheers />,
    foodPrice: 20000,
    menu: [
      "Barbecue Fish (1)",
      "Agbugbu na Ji (1)",
      "Bush Meat (1)",
    ],
  },
];

/* ================= HELPERS ================= */

const toInternational = (phone) =>
  phone.startsWith("0") ? "234" + phone.slice(1) : phone;

const generateReference = (code) =>
  `KVG-${code}-${Math.floor(1000 + Math.random() * 9000)}`;

/* ================= COMPONENT ================= */

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

  const selectedTable = eventTables.find(
    (t) => t.id === expandedId
  );

  const sendWhatsApp = () => {
    if (!hostName || !date || !time || !selectedTable) {
      alert("Please complete all booking details.");
      return;
    }

    const ref = generateReference(selectedTable.code);

    const foodTotal = selectedTable.foodPrice * units;
    const addOnTotal = ADD_ON_TOTAL * units;
    const grandTotal = foodTotal + addOnTotal;

    const message = encodeURIComponent(`
KEPONG EVENT TABLE BOOKING

REFERENCE
${ref}

CUSTOMER / CORPORATE TABLE SPONSOR
${hostName}

DATE & TIME
${date} | ${time}

TABLE PACKAGE
${selectedTable.name}

NUMBER OF TABLES
${units}

--------------------------------
COST BREAKDOWN
--------------------------------
Food: ₦${foodTotal.toLocaleString()}
NBL Drinks: ₦${(NBL_BUNDLE * units).toLocaleString()}
Palm Wine: ₦${(PALM_WINE * units).toLocaleString()}
Water: ₦${(WATER * units).toLocaleString()}
JungleX Marketing: ₦${(JUNGLEX_FEE * units).toLocaleString()}

--------------------------------
TOTAL PAYABLE
--------------------------------
₦${grandTotal.toLocaleString()}

--------------------------------
PAYMENT DETAILS
--------------------------------
Bank: ${BANK_DETAILS.bank}
Account Name: ${BANK_DETAILS.name}
Account Number: ${BANK_DETAILS.account}

➡ Send proof of payment here
➡ Call this number for enquiries
`);

    window.open(
      `https://wa.me/${toInternational(
        WHATSAPP_NUMBER
      )}?text=${message}`,
      "_blank"
    );

    setSent(true);
  };

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-[999]"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed top-10 left-1/2 -translate-x-1/2
        w-[94%] max-w-md rounded-2xl p-6
        z-[1000] max-h-[90vh] overflow-y-auto
        border border-white/20
        bg-black"
        style={{
          backgroundImage: `url(${nblBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/90 rounded-2xl -z-10" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70"
        >
          <FaTimes />
        </button>

        <img
          src={tableImage}
          alt="Event Table"
          className="w-full h-48 object-cover rounded-2xl mb-6"
        />

        <h3 className="text-center text-white tracking-widest mb-6 font-semibold">
          Branded Event Tables
        </h3>

        {eventTables.map((table) => {
          const open = expandedId === table.id;
          const displayPrice =
            table.foodPrice + ADD_ON_TOTAL;

          return (
            <div key={table.id} className="mb-4">
              <div
                onClick={() =>
                  setExpandedId(open ? null : table.id)
                }
                className={`p-4 rounded-2xl border cursor-pointer
                backdrop-blur-xl bg-black/80
                ${
                  open
                    ? "border-red-500"
                    : "border-white/30"
                }`}
              >
                <div className="flex justify-between items-center text-white">
                  <div className="flex gap-3 items-center">
                    {table.icon}
                    <p className="font-semibold text-lg">
                      {table.name}
                    </p>
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
                    className="mt-3 bg-black/85
                    backdrop-blur-md rounded-2xl p-4"
                  >
                    <ul className="text-sm text-white mb-4 space-y-2">
                      {table.menu.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>

                    <p className="text-xs text-gray-300 mb-4">
                      Includes: 2 Palm Wine, 4 Bottled Water,
                      NBL Drinks & JungleX Marketing
                    </p>

                    {!sent ? (
                      <div className="space-y-4">
                        <input
                          placeholder="Customer / Corporate Table Sponsor"
                          value={hostName}
                          onChange={(e) =>
                            setHostName(e.target.value)
                          }
                          className="w-full p-3 rounded-xl
                          bg-black/60 text-white"
                        />

                        <div
                          onClick={() =>
                            dateRef.current?.showPicker()
                          }
                          className="flex gap-3 bg-black/60
                          p-3 rounded-xl cursor-pointer text-white"
                        >
                          <FaCalendarAlt />
                          {date || "Select event date"}
                          <input
                            ref={dateRef}
                            type="date"
                            value={date}
                            onChange={(e) =>
                              setDate(e.target.value)
                            }
                            className="hidden"
                          />
                        </div>

                        <div
                          onClick={() =>
                            timeRef.current?.showPicker()
                          }
                          className="flex gap-3 bg-black/60
                          p-3 rounded-xl cursor-pointer text-white"
                        >
                          <FaClock />
                          {time || "Select event time"}
                          <input
                            ref={timeRef}
                            type="time"
                            value={time}
                            onChange={(e) =>
                              setTime(e.target.value)
                            }
                            className="hidden"
                          />
                        </div>

                        <input
                          type="number"
                          min="1"
                          value={units}
                          onChange={(e) =>
                            setUnits(Number(e.target.value))
                          }
                          className="w-full p-3 rounded-xl
                          bg-black/60 text-white"
                        />

                        <button
                          onClick={sendWhatsApp}
                          className="w-full bg-red-600
                          hover:bg-red-700 text-white
                          font-bold py-3 rounded-xl"
                        >
                          Proceed to Payment
                        </button>
                      </div>
                    ) : (
                      <div className="text-center text-green-400 py-6">
                        <FaCheckCircle className="mx-auto text-3xl mb-2" />
                        Booking Sent Successfully
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Aqua banner */}
        <img
          src={aquaImg}
          alt="Water Brand"
          className="w-full h-20 object-cover rounded-xl mt-6"
        />
      </div>
    </>,
    document.body
  );
};

export default ReserveTableModal;
