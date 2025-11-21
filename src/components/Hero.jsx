import React, { useCallback, useEffect, useState } from "react";
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import friendsBar from "@/assets/videos/service1.mp4";
import tradoDance from "@/assets/videos/trado.mp4";
import egusi from "@/assets/images/foodies/egusi.webp";
import fullVoltage from "@/assets/videos/service2.mp4";
import clubk from "@/assets/videos/clubbing.mp4";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Per-slide crop configuration (optional: omit crop to keep default)
  /*
    - crop.x and crop.y are CSS object-position values
    - Values are relative to the element (e.g., "50%" "40%")
    - You can adjust per slide as needed
  */
  const slides = [
    {
      type: "video",
      src: friendsBar,
      text: "This is Kepong",
      crop: { x: "50%", y: "40%" }, // crop region
    },
    {
      type: "video",
      src: tradoDance,
      text: "Tradional Dance Performances",
      crop: { x: "80%", y: "60%" },
    },
    {
      type: "image",
      src: egusi,
      text: "Tasty local dishes",
      // no crop -> full image fill
    },
    {
      type: "video",
      src: fullVoltage,
      text: "Full voltage",
      // no crop -> full image fill
    },
    {
      type: "video",
      src: clubk,
      text: "Premium clubbing at CLUB K",
      // no crop -> full image fill
    },
  ];

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const handleManualSlide = (direction) => {
    setIsFading(true);
    // Allow CSS fade to play out
    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === "next"
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
      setIsFading(false);
    }, 400);
  };

  // Auto-advance every 12 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleManualSlide("next");
    }, 12000);
    return () => clearInterval(intervalId);
  }, []);

  const currentSlide = slides[currentIndex];

  // Render a single media item (video or image) with optional crop
  const renderMedia = (slide, isVisible) => {
    const opacityClass = isVisible ? "opacity-100" : "opacity-0 pointer-events-none";

    // Crop style using object-position; object-fit: cover ensures cropping effect
    const cropStyle = slide.crop ? { objectPosition: `${slide.crop.x} ${slide.crop.y}` } : {};

    if (slide.type === "video") {
      return (
        <video
          key={slide.src}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${opacityClass}`}
          src={slide.src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          onEnded={(e) => e.currentTarget.play()}
          style={{ display: "block", ...cropStyle }}
        />
      );
    }

    // image
    return (
      <img
        key={slide.src}
        src={slide.src}
        alt={slide.text}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${opacityClass}`}
        loading="eager"
        style={{ display: "block", ...cropStyle }}
      />
    );
  };

  return (
    <section
      className="relative w-full overflow-visible hero-section mt-20 md:mt-60 border-b-4 border-black"
      style={{ height: "100vh", maxHeight: "700px" }}
    >
      <div className="relative w-full h-full overflow-hidden slide-viewport">
        {/* Render all slides, but only the current slide is visible via opacity */}
        {slides.map((slide, i) => renderMedia(slide, i === currentIndex))}
      </div>

      {/* Centered overlay text for current slide */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-20 pointer-events-none">
        <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
          {currentSlide.text}
        </h1>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-30">
        <button
          onClick={() => handleManualSlide("prev")}
          className="bg-white/10 hover:bg-red-600/80 text-white rounded-full p-3 md:p-4 shadow-md transition-all duration-300 border border-white/30 hover:border-red-500"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleManualSlide("next")}
          className="bg-white/10 hover:bg-red-600/80 text-white rounded-full p-3 md:p-4 shadow-md transition-all duration-300 border border-white/30 hover:border-red-500"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Mute / Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-30 bg-white/20 backdrop-blur-md text-white rounded-full p-3 shadow-lg hover:bg-white/30 transition-all duration-300"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={26} /> : <Volume2 size={26} />}
      </button>
    </section>
  );
};

export default Hero;