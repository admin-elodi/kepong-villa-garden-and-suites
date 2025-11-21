import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaDownload,
  FaMusic,
  FaFilm,
} from "react-icons/fa";

// Base card styles
const baseCardClasses =
  "space-y-6 text-center border-2 border-red-600 rounded-lg p-6 bg-gray-800";

// Base styles for social buttons
const socialBtnBase =
  "transform hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center w-12 h-12 border-2 shadow-md";

const socialBtnStyles = {
  facebook: "text-white border-[#1877F2] bg-[#1877F2] hover:bg-[#155fbe]",
  instagram:
    "text-white border-transparent bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:brightness-110",
  x: "text-white border-[#1DA1F2] bg-[#1DA1F2] hover:bg-[#0d8ddb]",
  tiktok: "text-white border-white bg-black hover:bg-pink-600",
};

// Download items data
const downloads = [
  {
    title: "Amapiano Instrumental (AfroCharts)",
    artist: "AfroCharts",
    url: "https://www.afrocharts.com/genre?id=ama",
    genre: "Amapiano",
    type: "music",
  },
  {
    title: "Afrobeat Instrumental (Pixabay)",
    artist: "Pixabay",
    url: "https://pixabay.com/music/search/afrobeat/",
    genre: "Afrobeats",
    type: "music",
  },
];

// Reusable Card wrapper
const Card = ({ children, className = "" }) => {
  return <div className={`${baseCardClasses} ${className}`}>{children}</div>;
};

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-16 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Featured Events */}
          <Card className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold animate-pulse text-white">
                Featured Events
              </h3>
              <p className="text-sm max-w-md mx-auto text-white">
                Join the entertainment experience at Kepong Villa Garden &
                Suites, Enugu!
              </p>
              <p className="mt-2 text-yellow-200 font-semibold max-w-md mx-auto">
                Main entertainment days: Wednesdays, Fridays an
              </p>
            </div>
            <div className="mt-6 bg-red-600/20 bg-opacity-80 rounded-lg p-4 max-w-md mx-auto text-left">
              <h4 className="font-semibold text-yellow-200 mb-2">
                Premium Entertainment
              </h4>
              <p className="text-xs text-white leading-relaxed">
                Experience our Afrobeat Friday Nights with live DJs, dance
                battles, and special guest performances every week. Don't miss
                the vibes on those days!
              </p>
            </div>
            <div className="flex space-x-6 justify-center mt-6">
              <a
                href="https://web.facebook.com/p/Kepong-Villa-Garden-100063802974099/?_rdc=1&_rdr#"
                className="flex flex-col items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`${socialBtnBase} ${socialBtnStyles.facebook}`}>
                  <FaFacebookF className="text-xl" />
                </div>
                <span className="mt-1 text-xs text-white">Facebook</span>
              </a>

              <a
                href="https://instagram.com/kepongvilla"
                className="flex flex-col items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`${socialBtnBase} ${socialBtnStyles.instagram}`}>
                  <FaInstagram className="text-xl" />
                </div>
                <span className="mt-1 text-xs text-white">Instagram</span>
              </a>

              <a
                href="https://www.tiktok.com/@kepongviilagardennsuites?_t=ZM-8yeKoqSqLpu&_r=1"
                className="flex flex-col items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`${socialBtnBase} ${socialBtnStyles.tiktok}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.25c.53 0 1.04.102 1.5.289v4.362a2.84 2.84 0 01-1.5-.471 3.022 3.022 0 00-1.693-.518c-1.659 0-3 1.502-3 3.358 0 1.854 1.341 3.357 3 3.357.15 0 .298-.034.437-.061V19.5a6.022 6.022 0 01-3.936-1.568 6.318 6.318 0 01-1.425-5.006 6.04 6.04 0 015.361-4.844V2.25z" />
                  </svg>
                </div>
                <span className="mt-1 text-xs text-white">TikTok</span>
              </a>
            </div>
          </Card>

          {/* Quick Links + Free Music */}
          <Card className="flex flex-col">
            <div>
              <h3 className="text-2xl font-bold text-white">Get in the Groove</h3>
              <ul className="space-y-3 text-sm mb-6">
                {[
                  { to: "/kepong-foodies", label: "Kepong Foodies" },
                  { to: "/club-k", label: "Club K" },
                  { to: "/bookings", label: "Book Now" },
                  { to: "/featured-entertainers", label: "Featured Entertainers" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-white hover:text-yellow-200 transition-colors duration-300 border-b-2 border-red-600 pb-1"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left max-w-md mx-auto">
              <h4 className="text-yellow-300 text-lg font-semibold mb-4">
                Free Downloads
              </h4>
              <ul className="space-y-4">
                {downloads.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between bg-red-600/20 rounded p-3 hover:bg-red-500 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.type === "music" ? (
                        <FaMusic className="text-yellow-300" />
                      ) : (
                        <FaFilm className="text-yellow-300" />
                      )}
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-yellow-200">
                          {item.artist} &mdash; {item.genre}
                        </p>
                      </div>
                    </div>
                    <a
                      href={item.url}
                      className="flex items-center space-x-1 text-yellow-300 hover:text-yellow-400 font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload />
                      <span className="text-xs">Download</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Visit Us */}
          <Card>
            <h3 className="text-2xl font-bold text-white">Visit Us</h3>
            <div className="flex flex-col items-center space-y-4 text-sm text-white max-w-md mx-auto">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl" />
                <p>#275 Ugwogo Nike Road, Abakpa, Enugu</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-xl" />
                <a
                  href="tel:+2349162836505"
                  className="hover:text-yellow-100 transition-colors"
                >
                  0916 283 6505
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:odogwucally@gmail.com"
                  className="hover:text-yellow-100 transition-colors"
                >
                  odogwucally@gmail.com
                </a>
              </div>
              <div
                className="w-full rounded-lg overflow-hidden mt-4"
                style={{ height: "200px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.022447115724!2d7.51408447404588!3d6.518842023219413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a378f42fc857%3A0xd6efa19237e1a2b9!2sKepong%20Villa%20Garden%20%26%20Suites!5e0!3m2!1sen!2sng!4v1745647133234!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Kepong Villa Garden & Suites Location"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 pt-8 border-t border-white text-center">
          <p className="font-bold md:text-lg text-xs text-white">
            © {new Date().getFullYear()} Kepong Villa Garden & Suites. All rights
            reserved.
          </p>
          <small className="text-yellow-100 text-[9px] md:text-[11px] mt-2 block">
            Website design by <span className="uppercase font-bold">Elodi Nigeria Enterprises: </span>{" "}
            <a href="tel:08136573235" className="hover:text-yellow-100">
              08136573235
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
