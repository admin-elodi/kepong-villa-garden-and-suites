import heroBg from '@/assets/images/hotel/hotel-front.webp';

const ConfirmationPage = ({ paymentMethod }) => {
  return (
    <section
      className="text-center py-12 min-h-screen font-montserrat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 100, 0, 0.7), rgba(0, 100, 0, 0.7)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto text-base sm:text-lg">
          Thank you for booking with Kepong Villa Garden & Suites! Please check your email (including spam/junk folder) for your booking details and payment instructions.{' '}
          {paymentMethod === 'bank-transfer' ? (
            <>
              Complete your payment via bank transfer using our details in the email. Use your full name as the reference to ensure quick confirmation.
            </>
          ) : (
            <>Please bring your payment upon arrival at Kepong Villa.</>
          )}
        </p>
        <a
          href="mailto:"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold text-base sm:text-lg"
          style={{ borderColor: '#FFD700', borderWidth: '2px' }}
          aria-label="Check email for booking and payment details"
        >
          Check Your Email Now
        </a>
      </div>
    </section>
  );
};

export default ConfirmationPage;