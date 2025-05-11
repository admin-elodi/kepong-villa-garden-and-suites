const ConfirmationPage = () => {
  return (
    <section className="text-center py-12 bg-gray-100 min-h-screen font-montserrat">
      <h2 className="text-3xl font-semibold text-green-800 mb-4">Booking Confirmed!</h2>
      <p className="text-gray-600 mb-6">Thank you for booking with Kepong Villa. You’ll receive a confirmation email soon.</p>
      <button
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        aria-label="Download your booking receipt"
        style={{ borderColor: '#FFD700', borderWidth: '2px' }}
      >
        Download Receipt
      </button>
    </section>
  );
};

export default ConfirmationPage;