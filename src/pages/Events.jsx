import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eventBirthday from '@/assets/images/amaka.jpeg';
import backgroundVideo from '@/assets/videos/background.mp4';

const event = {
  title: "Amaka's 30th Birthday Bash",
  date: 'July 20, 2025',
  time: '5:00 PM',
  desc: "08134493949",
  img: eventBirthday,
  alt: "Birthday Party",
  host: 'MC Odogwu & DJ Transition',
  venue: 'Kepong Villa Garden & Suites',
};

const Events = () => {
  const [showRSVP, setShowRSVP] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

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

  return (
    <main className="min-h-screen bg-black bg-opacity-90 py-32 flex justify-center items-start font-montserrat text-white">
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
          .event-info-bg {
            background: rgba(38, 38, 38, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <div className="relative w-full max-w-4xl md:max-w-8xl md:w-[95%] mx-auto rounded-lg shadow-2xl border border-white px-4 md:px-10 py-8 bg-black/95">
        <header className="mb-10 flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-yellow-200 mb-2 drop-shadow-lg fade-in">
            <span className="pb-1"> Events Announcement Page</span>
          </h1>
        </header>

        <section className="flex flex-col items-center">
          <div className="bg-neutral-900 bg-opacity-90 rounded-md shadow-xl p-6 flex flex-col items-center w-full border border-white relative slide-up delay-3">
            <img
              src={event.img}
              alt={event.alt}
              className="w-full md:w-4/6 h-80 md:h-[32rem] object-cover rounded-sm mb-6 shadow transition-all duration-300"
            />
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-yellow-200 drop-shadow-md text-center whitespace-nowrap overflow-hidden text-ellipsis">
              {event.title}
            </h2>
            <div className="flex flex-col py-14 gap-8 w-full md:w-2/4 mx-auto mb-4 event-info-bg">
              <div className="flex flex-col items-center">
                <span className="uppercase text-xs text-yellow-200 font-bold tracking-widest mb-1">Date & Time</span>
                <span className="text-base text-white font-semibold">{event.date}   -   {event.time}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="uppercase text-xs text-yellow-200 font-bold tracking-widest mb-1">Venue</span>
                <span className="text-sm text-white font-medium">{event.venue}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="uppercase text-xs text-yellow-200 font-bold tracking-widest mb-1">Masters of a Good Time</span>
                <span className="text-sm  text-white font-medium">{event.host}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="uppercase text-xs text-yellow-200 font-bold tracking-widest mb-1">Organisers</span>
                <span className="text-white text-center">{event.desc}</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6 w-full md:flex-row md:justify-center">
              <button
                onClick={() => setShowRSVP(true)}
                className="bg-emerald-900 hover:bg-yellow-100 text-white font-bold py-2 px-6 rounded-lg shadow transition w-full md:w-auto"
              >
                Attend this Event
              </button>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-lg text-center font-semibold text-white mb-3 border-2-b border-yellow-200 pb-1">
            Pre Event Video
          </h3>
          <div className="flex justify-center">
            <video
              src={backgroundVideo}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-4xl max-h-[550px] rounded-xl"
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
        </section>

        {showRSVP && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="bg-neutral-900 rounded-xl p-8 w-full max-w-sm shadow-xl border border-emerald-700 relative">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-amber-400 text-xl"
                onClick={() => setShowRSVP(false)}
                aria-label="Close RSVP"
              >
                ×
              </button>
              {rsvpSubmitted ? (
                <div className="text-center">
                  <p className="text-emerald-400 font-bold text-lg mb-2">Thank you for your RSVP!</p>
                  <p className="text-gray-200">See you at the event 🎉</p>
                </div>
              ) : (
                <>
                  <h3 className="text-base text-center font-bold text-amber-400 mb-4">RSVP for {event.title}</h3>
                  <form onSubmit={handleRSVP} className="flex flex-col gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      className="rounded px-3 py-2 bg-black border border-emerald-700 text-white focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={rsvpEmail}
                      onChange={(e) => setRsvpEmail(e.target.value)}
                      className="rounded px-3 py-2 bg-black border border-emerald-700 text-white focus:outline-none"
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

        <div className="flex flex-col items-center mt-10 max-w-md mx-auto px-4 text-center">
          <Link
            to="/bookings"
            className="inline-block bg-yellow-200 text-black py-1.5 px-4 rounded text-xs font-semibold hover:bg-amber-400 hover:text-black border border-emerald-900 shadow transition focus:ring-2 focus:ring-amber-500"
            aria-label="Book This Page"
          >
            Book This Page For Your Event Announcement
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Events;