import React, { useState, useEffect, useRef } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaHeart,
  FaShareAlt,
  FaHandsHelping,
  FaCommentDots,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMusic,
  FaPhoneAlt,
} from 'react-icons/fa';
import eventBirthday from '@/assets/images/amaka.webp';
import preEventVideo from '@/assets/videos/ready.mp4';
import backgroundVideo from '@/assets/videos/events.mp4'; // Ensure this path is correct
// Optional: If using public folder, use src="/videos/space.mp4" instead of import

const event = {
  title: "Amaka's 30th Birthday Bash",
  date: 'July 20, 2025',
  time: '5:00 PM',
  desc: '08134493949',
  img: eventBirthday,
  alt: 'Birthday Party',
  host: 'MC Odogwu & DJ Transition',
  venue: 'Kepong Villa Garden & Suites',
};

const Events = () => {
  const [showRSVP, setShowRSVP] = useState(false);
  const [showEndorse, setShowEndorse] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowEndorse(false);
      }
    }
    if (showEndorse) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEndorse]);

  const handleRSVP = (e) => {
    e.preventDefault();
    setRsvpSubmitted(true);
    setTimeout(() => {
      setShowRSVP(false);
      setRsvpSubmitted(false);
      setRsvpName('');
      setRsvpEmail('');
    }, 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    setMessageSent(true);
    setTimeout(() => {
      setMessage('');
      setMessageSent(false);
    }, 3000);
  };

  const handleDonate = (amount) => {
    setDonationAmount(amount);
    alert(`Thank you for your donation of ₦${amount}!`);
  };

  const shareUrl = window.location.href;
  const shareText = encodeURIComponent(
    `Join us at ${event.title} - an unforgettable night at Kepong Villa!`
  );

  return (
    <main className="relative min-h-screen bg-black bg-opacity-90 py-32 flex flex-col items-center font-montserrat text-yellow-100 px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 20 }}
        aria-hidden="true"
        onError={(e) => console.error('Video failed to load:', e)}
      >
        <source src={backgroundVideo} type="video/mp4" />
        {/* Optional: Add WebM fallback for broader browser support */}
        <source src="/videos/space.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay with reduced opacity for better video visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      <style>
        {`
          .fade-in {
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
          }
          .fade-in.delay-1 { animation-delay: 0.2s; }
          .fade-in.delay-2 { animation-delay: 0.4s; }
          .fade-in.delay-3 { animation-delay: 0.6s; }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          .slide-up {
            opacity: 0;
            transform: translateY(30px);
            animation: slideUp 0.9s cubic-bezier(.4,1.2,.6,1) forwards;
          }
          .slide-up.delay-1 { animation-delay: 0.3s; }
          .slide-up.delay-2 { animation-delay: 0.5s; }
          .slide-up.delay-3 { animation-delay: 0.7s; }
          @keyframes slideUp {
            to { opacity: 1; transform: translateY(0); }
          }
          .btn-yellow {
            background-color: #fef3c7;
            color: #000;
            font-weight: 700;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: 2px solid #fbbf24;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          .btn-yellow:hover {
            background-color: #fbbf24;
            color: #000;
            transform: scale(1.05);
          }
          .social-icon {
            color: #fef3c7;
            font-size: 1.75rem;
            margin: 0 0.75rem;
            cursor: pointer;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .social-icon:hover {
            color: #fbbf24;
            transform: scale(1.2);
          }
          .modal-bg {
            background: rgba(0,0,0,0.85);
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }
          .modal-content {
            background: #262626;
            border-radius: 12px;
            padding: 1.5rem 2rem;
            max-width: 480px;
            width: 100%;
            color: #fef3c7;
            box-shadow: 0 0 20px rgba(251,191,36,0.7);
            position: relative;
            max-height: 75vh;
            overflow-y: auto;
          }
          .modal-close {
            position: sticky;
            top: 0.5rem;
            right: 0.5rem;
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
            color: #fbbf24;
            transition: color 0.3s ease;
            line-height: 1;
            user-select: none;
            background: transparent;
            border: none;
            z-index: 10;
          }
          .modal-close:hover {
            color: #fef3c7;
          }
          .donate-btn {
            background: #fbbf24;
            color: #000;
            font-weight: 700;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            margin: 0.25rem;
            cursor: pointer;
            border: none;
            transition: background-color 0.3s ease;
            flex: 1 1 100px;
            text-align: center;
          }
          .donate-btn:hover {
            background: #f59e0b;
          }
          .support-option {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
            cursor: pointer;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(254,243,199,0.2);
            transition: background-color 0.2s ease;
          }
          .support-option:hover {
            background-color: rgba(251,191,36,0.1);
          }
          .support-icon {
            font-size: 1.5rem;
            color: #fbbf24;
            flex-shrink: 0;
          }
          .textarea.support-message {
            width: 100%;
            background: #1f1f1f;
            border-radius: 8px;
            border: 1px solid #fbbf24;
            color: #fef3c7;
            padding: 0.75rem;
            resize: vertical;
            font-family: inherit;
            font-size: 1rem;
          }
          .textarea.support-message::placeholder {
            color: #fbbf24aa;
          }
          .send-msg-btn {
            background: #fbbf24;
            color: #000;
            font-weight: 700;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            margin-top: 0.5rem;
            transition: background-color 0.3s ease;
            width: 100%;
          }
          .send-msg-btn:hover {
            background: #f59e0b;
          }
          .thank-you {
            color: #bbf7d0;
            font-weight: 600;
            margin-top: 0.75rem;
            text-align: center;
          }
          .donation-section {
            font-size: 0.9rem;
            opacity: 0.8;
          }
          .booking-invite {
            max-width: 480px;
            background: rgba(254, 243, 199, 0.1);
            border: 1px solid #fbbf24;
            border-radius: 12px;
            padding: 1.5rem 2rem;
            margin-top: 3rem;
            text-align: center;
            color: #fef3c7;
            box-shadow: 0 0 15px rgba(251,191,36,0.4);
          }
          .booking-invite strong {
            color: #fbbf24;
          }
          .booking-invite a {
            color: #fbbf24;
            font-weight: 700;
            text-decoration: underline;
          }
        `}
      </style>

      {/* Header */}
      <header className="relative z-20 mb-12 mt-8 text-center max-w-4xl px-4">
        <h1
          className="text-yellow-100 font-semibold uppercase tracking-wide drop-shadow-lg mb-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-[clamp(1.25rem,4vw,2rem)]"
          title="Events Announcement Page"
        >
          Events Announcement Page
        </h1>
        <h2
          className="text-yellow-300 font-bold drop-shadow-md text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-[clamp(1.25rem,4vw,1.75rem)]"
          title={event.title}
        >
          {event.title}
        </h2>
      </header>

      {/* Event Visual & Details (Centered Vertically and Orderly) */}
      <section className="relative z-20 flex flex-col items-center max-w-5xl w-full mb-20 slide-up delay-3">
        <div className="bg-yellow-700/80 rounded-lg shadow-2xl p-8 w-full max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <img
            src={event.img}
            alt={event.alt}
            className="w-full md:w-3/5 h-[28rem] md:h-[32rem] object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-center gap-10 text-white font-montserrat flex-1">
            {/* Date & Time */}
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-3xl text-yellow-300" aria-hidden="true" />
              <div>
                <p className="uppercase font-bold tracking-widest text-yellow-300 text-sm mb-1">
                  Date & Time
                </p>
                <p className="text-xl font-semibold drop-shadow-md">
                  {event.date} <span className="mx-1">|</span> {event.time}
                </p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-yellow-300" aria-hidden="true" />
              <div>
                <p className="uppercase font-bold tracking-widest text-yellow-300 text-sm mb-1">
                  Venue
                </p>
                <p className="text-lg font-medium drop-shadow-sm">{event.venue}</p>
              </div>
            </div>

            {/* Hosts */}
            <div className="flex items-center gap-4">
              <FaMusic className="text-3xl text-yellow-300" aria-hidden="true" />
              <div>
                <p className="uppercase font-bold tracking-widest text-yellow-300 text-sm mb-1">
                  Masters of a Good Time
                </p>
                <p className="text-lg font-medium drop-shadow-sm">{event.host}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-3xl text-yellow-300" aria-hidden="true" />
              <div>
                <p className="uppercase font-bold tracking-widest text-yellow-300 text-sm mb-1">
                  Contact
                </p>
                <p className="text-lg font-medium drop-shadow-sm">{event.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre Event Video */}
      <section className="relative z-20 mb-20 w-full max-w-5xl slide-up delay-4">
        <h3 className="text-xl text-center font-semibold text-yellow-100 mb-6 border-b-2 border-yellow-200 pb-2">
          Pre Event Highlights
        </h3>
        <div className="flex justify-center border border-white rounded-lg">
          <video
            src={preEventVideo}
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-4xl max-h-[550px] rounded-xl shadow-lg"
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </section>

      {/* RSVP and Endorse Buttons */}
      <section className="relative z-20 mb-20 w-full max-w-5xl flex flex-col gap-4 md:flex-row md:justify-center slide-up delay-5">
        <button
          onClick={() => setShowRSVP(true)}
          className="bg-black bg-opacity-80 hover:bg-yellow-200 hover:text-black text-yellow-100 font-bold py-3 border border-yellow-100 px-8 rounded-lg shadow transition w-full md:w-auto"
          aria-label="RSVP to Amaka's Birthday Bash"
        >
          RSVP
        </button>
        <button
          onClick={() => setShowEndorse(true)}
          className="bg-yellow-100 text-black font-bold py-3 px-8 rounded-lg shadow transition w-full md:w-auto hover:bg-amber-400 hover:text-black"
          aria-label="Endorse Amaka's Birthday Bash"
        >
          Endorse This Event
        </button>
      </section>

      {/* Social Sharing */}
      <section className="relative z-20 mb-20 text-center max-w-md mx-auto slide-up delay-6">
        <h3 className="text-yellow-100 text-2xl font-semibold mb-4">Share This Celebration</h3>
        <div className="flex justify-center">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`mailto:?subject=Join Amaka's Birthday Bash&body=${shareText}%20${encodeURIComponent(shareUrl)}`}
            aria-label="Share via Email"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* RSVP Modal */}
      {showRSVP && (
        <div className="fixed inset-0 z-50 modal-bg flex items-center justify-center px-4">
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => setShowRSVP(false)}
              aria-label="Close RSVP"
            >
              ×
            </button>
            {rsvpSubmitted ? (
              <div className="text-center">
                <p className="text-yellow-400 font-bold text-lg mb-2">Thanks for RSVPing!</p>
                <p className="text-yellow-200">See you there 🎉</p>
              </div>
            ) : (
              <>
                <h3 className="text-base text-center font-bold text-amber-400 mb-4">RSVP for {event.title}</h3>
                <form onSubmit={handleRSVP} className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    className="rounded px-3 py-2 bg-black border border-yellow-700 text-yellow-100 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    className="rounded px-3 py-2 bg-black border border-yellow-700 text-yellow-100 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 rounded-lg transition"
                  >
                    RSVP Now
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Endorse Modal */}
      {showEndorse && (
        <div className="modal-bg" role="dialog" aria-modal="true" aria-labelledby="endorse-title">
          <div className="modal-content" ref={modalRef}>
            <button
              className="modal-close"
              onClick={() => setShowEndorse(false)}
              aria-label="Close Endorse Modal"
            >
              ×
            </button>
            <h3 id="endorse-title" className="text-2xl font-bold mb-6 text-yellow-100 text-center">Endorse This Event</h3>

            {/* Support Options */}
            <div>
              {/* Social Sharing */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FaShareAlt className="support-icon" /> Share
                </h4>
                <div className="flex justify-center gap-6 text-yellow-100">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="social-icon"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                    className="social-icon"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="social-icon"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={`mailto:?subject=Join Amaka's Birthday Bash&body=${shareText}%20${encodeURIComponent(shareUrl)}`}
                    aria-label="Share via Email"
                    className="social-icon"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Volunteer Support */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FaHandsHelping className="support-icon" /> Volunteer
                </h4>
                <p className="text-yellow-200 mb-2">
                  Help make the event great!
                </p>
                <button
                  className="btn-yellow w-full max-w-xs mx-auto"
                  onClick={() => alert('Thank you for volunteering! Contact 08134493949.')}
                  aria-label="Volunteer to help"
                >
                  Volunteer
                </button>
              </div>

              {/* Send a Message */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FaCommentDots className="support-icon" /> Send a Message
                </h4>
                <form onSubmit={handleSendMessage}>
                  <textarea
                    className="support-message"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    aria-label="Support message"
                  />
                  <button type="submit" className="send-msg-btn" aria-label="Send message">
                    Send
                  </button>
                  {messageSent && <p className="thank-you">Thanks for your support!</p>}
                </form>
              </div>

              {/* Monetary Support */}
              <div className="donation-section">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FaHeart className="support-icon" /> Donate (Optional)
                </h4>
                <div className="flex flex-wrap gap-3 mb-2">
                  {[1000, 2000, 5000, 10000].map((amt) => (
                    <button
                      key={amt}
                      className="donate-btn"
                      onClick={() => handleDonate(amt)}
                      aria-label={`Donate ₦${amt}`}
                    >
                      ₦{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="500"
                  placeholder="Custom ₦"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="rounded px-3 py-2 bg-black border border-yellow-700 text-yellow-100 focus:outline-none w-full max-w-xs"
                />
                <button
                  className="donate-btn mt-2"
                  onClick={() => {
                    if (donationAmount && Number(donationAmount) >= 500) {
                      handleDonate(donationAmount);
                    } else {
                      alert('Enter valid amount (min ₦500)');
                    }
                  }}
                  aria-label="Donate custom amount"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Invitation */}
      <section className="relative z-20 booking-invite slide-up delay-7" aria-label="Booking Invitation">
        <p>
          Want to <strong>book this page</strong> for your event? <br />
          Call us at <a href="tel:08132234434">08162836505</a>
        </p>
      </section>
    </main>
  );
};

export default Events;