import React from 'react';
import djVideo from '@/assets/videos/dj-demure.mp4'; // replace with actual DJ video

const FeaturedVideos = () => {
  return (
    <section className="py-10">
      <div className="w-full px-0">
        <div className="text-center mb-6 max-w-2xl mx-auto rounded-lg">
         <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white pb-2">
              🎧 Featured Kepong DJ
            </h2>
          </div>
          <div className="mt-2">
            <h1 className="text-lg sm:text-xl border-b-4 border-red-600 inline-block font-bold text-white pb-1">
              DJ TEE MASTER
            </h1>
          </div>

          
        </div>

        <div className="w-full mx-auto mb-6 border-t-4 border-b-4 border-red-600">
          <div
            className="overflow-hidden shadow-xl"
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
