import React from 'react';
import djVideo from '@/assets/videos/dj-demure.mp4'; // replace with actual DJ video

const FeaturedVideos = () => {
  return (
    <section className="py-10"> {/* Reduced vertical padding */}
      <div className="w-full px-0"> {/* Remove max-width for full width */}
        <div className="text-center mb-6"> {/* Reduced margin-bottom */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white border-b-2 border-amber-400 inline-block pb-2">
            🎧 Featured DJ
          </h2>
          <h1 className="text-lg sm:text-xl text-emerald-100 mt-2">
            DJ TRANSITION 
          </h1>
          <p>Lighting up the weekend with good music</p>
        </div>

        <div className="w-full mx-auto mb-6">
          <div
            className="rounded-lg overflow-hidden shadow-xl"
            style={{ height: '520px', width: '98vw', maxWidth: '100vw', marginLeft: 'calc(-49vw + 50%)' }}
          >
            <video
              src={djVideo}
              autoPlay
              loop
              playsInline
              muted={false}
              controls={false}
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
