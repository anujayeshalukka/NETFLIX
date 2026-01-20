import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MultiCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(6);

  
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile: 2 cards
        setVisibleCards(2);
      } else if (width < 1024) {
        // Tablet/Mid: 4 cards
        setVisibleCards(4);
      } else {
        // Desktop: 6 cards
        setVisibleCards(6);
      }
      // Reset index when screen size changes to prevent overflow
      setIndex(0);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const CARD_WIDTH = 100 / visibleCards;
  const maxIndex = Math.max(0, items.length - visibleCards);

  const handlePrev = () => {
    setIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="relative w-full overflow-visible">
      {/* Container with proper height to accommodate cards and hover effects */}
      <div className="relative w-full overflow-hidden pb-4">
        {/* LEFT GRADIENT FADE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />

        {/* RIGHT GRADIENT FADE */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

        {/* PREV BUTTON */}
        {index > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black text-white rounded-full p-2 sm:p-3 shadow-lg transition-colors"
          >
            <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
          </button>
        )}

        {/* NEXT BUTTON */}
        {index < maxIndex && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black text-white rounded-full p-2 sm:p-3 shadow-lg transition-colors"
          >
            <ChevronRight size={24} className="sm:w-7 sm:h-7" />
          </button>
        )}

        {/* SLIDER */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * CARD_WIDTH}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative shrink-0 px-0.5 sm:px-1 md:px-1.5 lg:px-2"
              style={{ width: `${CARD_WIDTH}%` }}
            >
              {/* SLIDE COUNT (Netflix style number on the left) */}
              <span
                className="absolute bottom-0 -left-[10px] text-7xl sm:text-8xl font-black text-black z-30 leading-none"
                style={{ WebkitTextStroke: '2px white' }}
              >
                {i + 1}
              </span>

              {/* CARD */}
              <div className="relative h-32 xs:h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 rounded-md overflow-hidden bg-zinc-900 cursor-pointer transform group-hover:scale-110 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 group-hover:z-20 transition-all duration-300 ease-out shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* DARK GRADIENT OVERLAY ON HOVER */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* TITLE / META (bottom left like Netflix) */}
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
                  <p className="font-semibold text-white truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiCarousel;
