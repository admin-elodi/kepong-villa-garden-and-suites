import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUtensils, 
  FaFish, 
  FaLeaf, 
  FaGlassCheers, 
  FaCheckCircle, 
  FaTimes, 
  FaChevronDown, 
  FaChevronUp, 
  FaUser, 
  FaCalendarAlt, 
  FaClock,
  FaChair,
  FaPeace
} from 'react-icons/fa';
import tableImage from '@/assets/images/homepage/table-for-four.webp';

const enquiryPhoneNumber = '+2348162482304';

// CURRENT LIVE MENUS — UPDATED PRICES & FOOD COSTS
const eventTables = [
  {
    id: "traditional",
    name: "Traditional Igbo Feast",
    description: "Deep ancestral roots, swallow-based, soulful Igbo celebration",
    icon: <FaLeaf className="text-white/70" />,
    price: "₦26,000",
    foodCost: 22200,
    dineIn: [
      { name: "Nsala Soup with Eba", quantity: 2, chef: "Chef Tessy Special Kitchen", description: "Silky white soup, light on the belly" },
      { name: "Oha Soup with Poundo", quantity: 2, chef: "Madam Ezinwanne Kitchen", description: "Rich, aromatic, medicinal greens" },
      { name: "Ukwa (Breadfruit)", quantity: 1, chef: "Madam Ezinwanne Kitchen", description: "Ancient superfood, naturally sweet & filling" },
      { name: "Peppered Goat Meat", quantity: 2, chef: "Abacha Nwanyi Ezeagu", description: "Spicy, bold, straight from the fire" },
      { name: "Zobo Drink", quantity: 4, chef: "De Banquet Hotel Kitchen", description: "Tangy, refreshing, antioxidant-rich" },
    ],
    takeHome: [
      { name: "Abacha (African Salad)", quantity: 1, chef: "Abacha Nwanyi Ezeagu", description: "Crunchy, peppery, legendary Nsukka style" },
      { name: "Tiger Nut Drink", quantity: 2, chef: "De Banquet Hotel Kitchen", description: "Natural energy & vitality boost" },
      { name: "Ugba & Stockfish Mix", quantity: 1, chef: "Madam Ezinwanne Kitchen", description: "Fermented locust bean delicacy" },
    ],
  },
  {
    id: "seafood",
    name: "Seafood Special",
    description: "Ocean luxury — whole fish, premium indulgence",
    icon: <FaFish className="text-white/70" />,
    price: "₦35,000",
    foodCost: 30700,
    dineIn: [
      { name: "Whole Barbecue Fish", quantity: 1, chef: "Fresh Fish Barbecue", description: "Fresh tilapia, smoky, perfectly spiced" },
      { name: "Peppered Snails", quantity: 1, chef: "Madam Ezinwanne Kitchen", description: "Giant snails in fiery pepper sauce" },
      { name: "White Rice & Stew", quantity: 2, chef: "De Banquet Hotel Kitchen", description: "Fresh garden stew, light & balanced" },
      { name: "Chapman", quantity: 4, chef: "Kepong Bar", description: "Signature tropical mocktail toast" },
      { name: "Vegetable Soup", quantity: 1, chef: "Madam Ezinwanne Kitchen", description: "Green goodness, light & hearty" },
    ],
    takeHome: [
      { name: "Achicha Ede with Fish", quantity: 1, chef: "Mama Chioma Enterprises", description: "Cocoyam porridge with dried fish" },
      { name: "Zobo (1 Liter)", quantity: 1, chef: "De Banquet Hotel Kitchen", description: "Take the refreshment home" },
      { name: "Peppered Fish Wrap", quantity: 1, chef: "Fresh Fish Barbecue", description: "Leftover fish in foil, ready to reheat" },
    ],
  },
  {
    id: "wedding",
    name: "Wedding Mini-Banquet",
    description: "Elegant, celebratory, perfect for love & legacy",
    icon: <FaUtensils className="text-white/70" />,
    price: "₦25,000",
    foodCost: 21900,
    dineIn: [
      { name: "Jollof Rice & Chicken", quantity: 2, chef: "Chef Tessy Special Kitchen", description: "Golden, fragrant, wedding classic" },
      { name: "Fried Rice & Plantain", quantity: 2, chef: "De Banquet Hotel Kitchen", description: "Colorful, sweet & savory balance" },
      { name: "Nsala Soup with Eba", quantity: 1, chef: "Chef Tessy Special Kitchen", description: "Light, elegant swallow option" },
      { name: "Peppered Meat Assorted", quantity: 2, chef: "Madam Ezinwanne Kitchen", description: "Goat, cowleg, shaki — full celebration" },
      { name: "Chapman & Zobo Mix", quantity: 4, chef: "Kepong Bar", description: "Love in a glass" },
    ],
    takeHome: [
      { name: "Fruit Salad Bowl", quantity: 1, chef: "Chop with Nazzy", description: "Fresh pineapple, watermelon, banana" },
      { name: "Tiger Nut Drink", quantity: 2, chef: "De Banquet Hotel Kitchen", description: "Fertility & legacy booster" },
      { name: "Small Jollof Pack", quantity: 1, chef: "Chef Tessy Special Kitchen", description: "For midnight cravings" },
    ],
  },
  {
    id: "hangout",
    name: "Chill & Grill Hangout",
    description: "Settle beef, drink palm wine, swallow heavy — pure Nsukka vibes",
    icon: <FaGlassCheers className="text-white/70" />,
    price: "₦26,000",
    foodCost: 22800,
    dineIn: [
      { name: "Peppered Goat Meat", quantity: 2, chef: "Abacha Nwanyi Ezeagu", description: "Hot, spicy, straight from the grill" },
      { name: "Oha Soup with Poundo", quantity: 2, chef: "Madam Ezinwanne Kitchen", description: "Bitterleaf’s cousin — deep flavor" },
      { name: "Bitterleaf Soup with Eba", quantity: 2, chef: "Chef Tessy Special Kitchen", description: "Wash away the bitterness of beef" },
      { name: "Fresh Palm Wine (Ngwo-Ngwo)", quantity: 2, chef: "Mama Chioma Enterprises", description: "Tapped today — sweet, frothy, peace-bringing" },
      { name: "Abacha & Ugba", quantity: 1, chef: "Abacha Nwanyi Ezeagu", description: "The ultimate hangout starter" },
    ],
    takeHome: [
      { name: "Palm Wine (Sealed 75cl)", quantity: 1, chef: "Mama Chioma Enterprises", description: "Continue the peace at home" },
      { name: "Abacha Full Pack", quantity: 1, chef: "Abacha Nwanyi Ezeagu", description: "Midnight reconciliation snack" },
      { name: "Peppered Meat Pack", quantity: 1, chef: "Abacha Nwanyi Ezeagu", description: "Leftover fire for tomorrow" },
      { name: "Ukwa (Small Bowl)", quantity: 1, chef: "Madam Ezinwanne Kitchen", description: "Ancient wisdom to go" },
    ],
  },
];

const TableCard = ({ children, className = "", onClick, isOpen }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`relative p-5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl border-2 transition-all duration-300 cursor-pointer shadow-lg ${
      isOpen 
        ? "border-red-500/60 bg-red-900/20 shadow-red-500/20" 
        : "border-white/20 hover:border-red-500/40 hover:shadow-red-500/10"
    } ${className}`}
  >
    {children}
  </motion.div>
);

const ReserveTableModal = ({ isOpen, onClose }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [units, setUnits] = useState(1);
  const [selectedTable, setSelectedTable] = useState(eventTables[0]);
  const [expandedId, setExpandedId] = useState(null);
  const [hostName, setHostName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!isOpen || !onClose) return null;

  const handleClose = () => {
    onClose();
    setShowPayment(false);
    setUnits(1);
    setSelectedTable(eventTables[0]);
    setExpandedId(null);
    setHostName("");
    setSelectedDate("");
    setSelectedTime("");
  };

  const toggleExpand = (id) => {
    const newId = expandedId === id ? null : id;
    setExpandedId(newId);
    if (newId) setSelectedTable(eventTables.find(t => t.id === id));
  };

  const handleUnitsChange = (e) => {
    const val = e.target.value;
    if (val === '') return setUnits('');
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 1 && num <= 6) setUnits(num);
  };

  const handleProceedToPayment = () => {
    if (!units || units < 1 || !hostName.trim() || !selectedDate || !selectedTime) {
      alert('Please fill all fields: Host Name, Date, Time, and Units (max 6).');
      return;
    }
    setShowPayment(true);
  };

  const openWhatsApp = () => {
    const menuDetails = [
      ...selectedTable.dineIn.map(i => `${i.name}: ${i.quantity} serving${i.quantity > 1 ? 's' : ''} — by ${i.chef}`),
      ...selectedTable.takeHome.map(i => `${i.name}: ${i.quantity} serving${i.quantity > 1 ? 's' : ''} (Take-Home) — by ${i.chef}`),
    ].join('\n');

    const totalPrice = units * parseInt(selectedTable.price.replace(/[^0-9]/g, ''), 10);
    const totalFoodCost = units * selectedTable.foodCost;
    const totalAddOn = units * 3000;

    const message = encodeURIComponent(
      `Hello Kepong Villa Team,\n\nHost: ${hostName.trim()}\nEvent: ${selectedDate} at ${selectedTime}\n\nBooking ${units} × "${selectedTable.name}"\nTotal: ₦${totalPrice.toLocaleString()}\n\nMenu per Table:\n${menuDetails}\n\n[INTERNAL ONLY]\nFood Cost: ₦${totalFoodCost.toLocaleString()}\nExperience Add-On ×${units}: ₦${totalAddOn.toLocaleString()}\nGrand Total: ₦${totalPrice.toLocaleString()}\n\nPlease confirm & send payment details.\n\nOne Table, One Vibe!`
    );

    window.open(`https://wa.me/${enquiryPhoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const totalPrice = units ? units * parseInt(selectedTable.price.replace(/[^0-9]/g, ''), 10) : 0;

  const modalContent = (
    <>
      {/* Instant backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center p-4 border-2 border-white"
        onClick={handleClose}
      />

      {/* Super-fast, crisp modal entrance */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: "spring", stiffness: 800, damping: 35, duration: 0.25 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-sm sm:w-[96%] sm:max-w-md bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/30 p-5 sm:p-6 max-h-[84vh] overflow-y-auto z-[1000] scrollbar-thin"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/60 hover:text-white text-xl z-10">
          <FaTimes />
        </button>

        <div className="text-center mb-4">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-widest">Event & Hangout Tables</h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 italic">Premium Tables • 4 Chairs Each</p>
          <p className="text-xs text-yellow-400 font-bold mt-2">Featuring Kepong’s Legendary Chefs!</p>
        </div>

        <div className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden mb-5 shadow-inner relative" style={{backgroundImage: `url(${tableImage})`, backgroundSize:'cover', backgroundPosition:'center'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white"><FaChair className="text-lg" /><span className="text-xs font-bold">4-Chair Cane Table</span></div>
        </div>

        <p className="text-white/90 text-sm font-medium text-center mb-3">Select Your Table</p>

        <div className="space-y-4">
          {eventTables.map(table => {
            const isOpen = expandedId === table.id;
            const isHangout = table.id === "hangout";

            return (
              <div key={table.id}>
                <TableCard isOpen={isOpen} onClick={() => toggleExpand(table.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {table.icon}
                      <div>
                        <p className="text-white font-bold text-[15px] sm:text-base">{table.name}</p>
                        <p className="text-gray-300 text-xs italic">{table.description}</p>
                        {isHangout && (
                          <p className="text-green-400 text-xs font-bold mt-1 flex items-center gap-1">
                            <FaPeace className="text-sm" /> Perfect for settling beef with palm wine
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-100 font-black text-sm sm:text-base">{table.price}</p>
                      {isOpen ? <FaChevronUp className="text-white/60 mt-1"/> : <FaChevronDown className="text-white/60 mt-1"/>}
                    </div>
                  </div>
                </TableCard>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="mt-3 bg-white/10 rounded-2xl p-4 border border-white/20 space-y-5 text-xs sm:text-sm">
                        <div>
                          <h5 className="font-bold text-yellow-100 mb-2">Dine-In Menu (Per Table)</h5>
                          {table.dineIn.map(item => (
                            <div key={item.name} className="mb-2">
                              <p className="font-medium uppercase text-white">{item.name}</p>
                              <p className="text-sky-400">{item.quantity} serving{item.quantity > 1 ? 's' : ''}</p>
                              <p className="text-yellow-300 text-xs font-medium mt-1">by {item.chef}</p>
                              <p className="text-gray-300 text-xs">{item.description}</p>
                            </div>
                          ))}
                        </div>

                        {table.takeHome.length > 0 && (
                          <div>
                            <h5 className="font-bold text-yellow-100 mb-2">Take-Home (Per Table)</h5>
                            {table.takeHome.map(item => (
                              <div key={item.name} className="mb-2">
                                <p className="font-medium uppercase text-white">{item.name}</p>
                                <p className="text-sky-400">{item.quantity} serving{item.quantity > 1 ? 's' : ''} (Take-Home)</p>
                                <p className="text-yellow-300 text-xs font-medium mt-1">by {item.chef}</p>
                                <p className="text-gray-300 text-xs">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {!showPayment ? (
                          <div className="mt-4 space-y-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1"><FaUser className="text-white/60 text-sm"/><span className="text-white text-xs font-medium">Host Name</span></div>
                              <input type="text" value={hostName} onChange={e => setHostName(e.target.value)} placeholder="Enter host name" className="w-full p-2 rounded-lg text-black text-sm"/>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-1"><FaCalendarAlt className="text-white/60 text-sm"/><span className="text-white text-xs font-medium">Date</span></div>
                              <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="w-full p-2 rounded-lg text-black text-sm"/>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-1"><FaClock className="text-white/60 text-sm"/><span className="text-white text-xs font-medium">Time</span></div>
                              <input type="time" value={selectedTime} onChange={e => setSelectedTime(e.target.value)} className="w-full p-2 rounded-lg text-black text-sm"/>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-1"><FaChair className="text-white/60 text-sm"/><span className="text-white text-xs font-medium">Units</span></div>
                              <input type="number" value={units} onChange={handleUnitsChange} placeholder="1" min="1" max="6" className="w-full p-2 rounded-lg text-black text-sm"/>
                            </div>

                            <button onClick={handleProceedToPayment} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-xl mt-3 text-sm">Proceed to WhatsApp</button>
                          </div>
                        ) : (
                          <div className="mt-4 flex flex-col items-center gap-3">
                            <p className="text-green-400 font-bold text-sm"><FaCheckCircle className="inline mb-1"/> Ready to Confirm!</p>
                            <p className="text-white text-xs">Total Price: ₦{totalPrice.toLocaleString()}</p>
                            <button onClick={openWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-xl text-sm">Send via WhatsApp</button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default ReserveTableModal;
