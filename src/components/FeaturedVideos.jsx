import React from 'react';
import djVideo from '@/assets/videos/dj-demure.mp4'; // replace with actual DJ video

const FeaturedVideos = () => {
  return (
    <section className="py-10">
      <div className="w-full px-0">
        <div className="text-center mb-6 bg-black/60 max-w-2xl mx-auto rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-white border-b-2 border-amber-400 inline-block pb-2">
            🎧 Featured Kepong DJ
          </h2>
          <h1 className="text-lg sm:text-xl font-bold text-emerald-100 mt-2">
            DJ TEE MASTER
          </h1>
          <p className="text-yellow-100">Lighting up the weekend with good music</p>
        </div>

        <div className="w-full mx-auto mb-6">
          <div
            className="rounded-lg overflow-hidden shadow-xl"
            style={{
              height: '520px',
              width: '98vw',
              maxWidth: '100vw',
              marginLeft: 'calc(-49vw + 50%)',
            }}
          >
            <video
              src={djVideo}
              autoPlay
              loop
              
              controls // ✅ Now users can pause/play
              playsInline
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
