
import { Link } from 'react-router-dom';

const ClubK = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-montserrat">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center hover:scale-100 transition-transform duration-500"
        style={{ backgroundImage: "url('@/assets/images/club/dance2.jpg')" }}
      >
        <div className="absolute inset-0 bg-green-800 opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in">
            Discover Club K
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/80">
            The Ultimate Nightlife Experience at Kepong Villa Garden & Suites's CLUB K Night Club
          </p>
          <Link
            to="/booking"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Book Your Night
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
          Why Club K?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "World-Class DJs",
              img: "dj.jpg",
              desc:
                "Dance to electrifying beats from top DJs spinning the latest hits and classic anthems every weekend.",
            },
            {
              title: "Premium Drinks",
              img: "drink1.jpeg",
              desc: "Savor expertly crafted cocktails and premium spirits at our stylish bars.",
            },
            {
              title: "Exclusive VIP Areas",
              img: "vip1.jpeg",
              desc:
                "Enjoy luxury with private booths, bottle service, and personalized attention.",
            },
            {
              title: "Themed Events",
              img: "dance1.jpeg",
              desc:
                "Join us for unforgettable nights with themed parties and celebrity appearances.",
            },
            {
              title: "Vibrant Dance Floor",
              img: "dance2.jpg",
              desc:
                "Lose yourself in the music on our state-of-the-art dance floor with stunning visuals.",
            },
            {
              title: "Immersive Ambiance",
              img: "ambience1.jpg",
              desc:
                "Experience a sleek, modern design with neon lights and a high-energy atmosphere.",
            },
          ].map(({ title, img, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 transform hover:scale-105 transition duration-300 border-l-4 border-orange-500"
            >
              <img
                src={`@/assets/images/club/${img}`}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Ready to Party at Club K?
        </h2>
        <p className="text-lg mb-6 text-white/80">
          Join us at Kepong Villa Garden & Suites for a night you’ll never forget!
        </p>
        <Link
          to="/contact"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          style={{ borderColor: '#FFD700', borderWidth: '2px' }}
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ClubK;