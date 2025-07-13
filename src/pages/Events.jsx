import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMusic,
  FaPhoneAlt,
} from 'react-icons/fa';
import eventBirthday from '@/assets/images/amaka.webp';
import preEventVideo from '@/assets/videos/ready.mp4';
import backgroundVideo from '@/assets/videos/events.mp4'; // Ensure this path is correct

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
           .text-bg {
             background: rgba(0, 0, 0, 0.7);
             padding: 0.5rem 1rem;
             border-radius: 8px;
             display: inline-block;
             text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
           }

           /* New styles to clamp image top-left */
           .event-image-container {
             position: relative;
             flex-shrink: 0;
             width: 60%;
             height: 32rem;
             margin: 0; /* Remove any default margin */
             padding: 0; /* Remove padding */
           }
           .event-image-container img {
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             object-fit: cover;
             border-radius: 0.5rem; /* Keep rounded corners */
             box-shadow: 0 10px 15px rgba(0,0,0,0.5);
           }

           @media (max-width: 768px) {
             .event-image-container {
               width: 100%;
               height: 28rem;
               position: relative;
             }
           }
        `}
      </style>

      {/* Header */}
      <section className="flex justify-center max-w-2xl w-full bg-black py-4 px-4 mb-4 text-center slide-up">
        <div>
          <h1
            className="text-4xl sm:text-5xl md:text-4xl font-bold tracking-tight mb-4 text-bg"
            style={{ color: 'white' }}
            title="Events Announcement Page"
          >
            Events Announcement Page
          </h1>
          <h2
            className="text-lg sm:text-xl md:text-xl max-w-2xl mx-auto mb-4 text-bg"
            style={{ color: '#fef3c7cc' }}
            title={event.title}
          >
            {event.title}
          </h2>
        </div>
      </section>

      {/* Event Visual & Details */}
      <section className="relative z-20 flex flex-col items-center max-w-5xl w-full mb-20 slide-up delay-3">
        <div className="bg-yellow-700/80 rounded-lg shadow-2xl p-8 w-full max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="event-image-container">
            <img
              src={event.img}
              alt={event.alt}
            />
          </div>
          <div className="flex flex-col justify-center gap-10 text-white font-montserrat flex-1">
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
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-yellow-300" aria-hidden="true" />
              <div>
                <p className="uppercase font-bold tracking-widest text-yellow-300 text-sm mb-1">
                  Venue
                </p>
                <p className="text-lg font-medium drop-shadow-sm">{event.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMusic className="text-3xl text-yellow-300" aria-hidden="true" />
              <div>
                <p className="uppercase font-bold tracking-widest text-yellow-300 text-sm mb-1">
                  Masters of a Good Time
                </p>
                <p className="text-lg font-medium drop-shadow-sm">{event.host}</p>
              </div>
            </div>
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
