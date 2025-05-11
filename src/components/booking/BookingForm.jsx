import { useState } from 'react';

const BookingForm = ({ selectedRoom, onBack, onSubmit }) => {
  const foodOptions = [
    { name: 'Jollof Rice', price: 2000 },
    { name: 'Egusi Soup with Pounded Yam', price: 3500 },
    { name: 'Fried Rice and Chicken', price: 4500 },
    { name: 'Vegetable Soup with Fufu', price: 3000 },
    { name: 'Pepper Soup', price: 1500 },
  ];
  const drinkOptions = [
    { name: 'Chapman', price: 25000 },
    { name: 'Zobo', price: 800 },
    { name: 'Palm Wine', price: 1200 },
    { name: 'Soft Drinks', price: 500 },
    { name: 'Cocktails', price: 2000 },
  ];

  const deliverySurcharge = 1000;

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    location: '',
    deliveryDate: '',
    food: [],
    drinks: [],
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, category, item) => {
    const { checked } = e.target;
    setFormData((prev) => {
      const updatedCategory = checked
        ? [...prev[category], { name: item.name, price: item.price }]
        : prev[category].filter((selected) => selected.name !== item.name);
      return { ...prev, [category]: updatedCategory };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      selectedRoom,
      deliverySurcharge: selectedRoom ? 0 : deliverySurcharge,
    });
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="bg-gray-300 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">
          {selectedRoom ? `Book ${selectedRoom.roomType}` : 'Book Food & Drinks'}
        </h2>
        <form onSubmit={handleSubmit}>
          {selectedRoom && (
            <div className="mb-4">
              <label className="block text-green-800 font-medium">Selected Room</label>
              <p className="text-orange-500 font-semibold">
                {selectedRoom.roomType} - ₦{selectedRoom.price.toLocaleString()}/night
              </p>
            </div>
          )}
          {selectedRoom ? (
            <>
              <div className="mb-4">
                <label className="block text-green-800 font-medium" htmlFor="checkIn">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-800 font-medium" htmlFor="checkOut">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-green-800 font-medium" htmlFor="deliveryDate">
                  Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-800 font-medium" htmlFor="location">
                  Delivery Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="E.g., 123 Independence Layout, Enugu"
                  required
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-green-800 font-medium mb-2">Food (Optional)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {foodOptions.map((food, index) => (
                <label key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="food"
                      value={food.name}
                      checked={formData.food.some((item) => item.name === food.name)}
                      onChange={(e) => handleCheckboxChange(e, 'food', food)}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-gray-600">{food.name}</span>
                  </div>
                  <span className="text-orange-500 font-medium">
                    ₦{food.price.toLocaleString()}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-green-800 font-medium mb-2">Drinks (Optional)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {drinkOptions.map((drink, index) => (
                <label key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="drinks"
                      value={drink.name}
                      checked={formData.drinks.some((item) => item.name === drink.name)}
                      onChange={(e) => handleCheckboxChange(e, 'drinks', drink)}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-gray-600">{drink.name}</span>
                  </div>
                  <span className="text-orange-500 font-medium">
                    ₦{drink.price.toLocaleString()}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {!selectedRoom && (
            <div className="mb-4">
              <label className="block text-green-800 font-medium">Delivery Surcharge</label>
              <p className="text-orange-500 font-semibold">
                ₦{deliverySurcharge.toLocaleString()} (added to total)
              </p>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-green-800 font-medium" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 font-medium" htmlFor="phone">
              {selectedRoom ? 'Phone Number' : 'Phone Number (For Delivery Contact)'}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 font-medium">Payment</label>
            <p className="text-gray-600">
              Secure payment integration (e.g., Paystack) will be added later.
            </p>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              style={{ borderColor: '#FFD700', borderWidth: '2px' }}
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;