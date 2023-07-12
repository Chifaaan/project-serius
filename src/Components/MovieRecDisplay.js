import React, { useRef, useEffect, useState } from 'react';
import MovieRec from './MovieRec';


const MovieRecDisplay = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    setContainerWidth(container.offsetWidth);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1140);
    };

    handleResize(); // Check initial viewport width
    window.addEventListener('resize', handleResize); // Listen for viewport width changes
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  const handleSliderButtonClick = (direction) => {
    const container = containerRef.current;
    const scrollAmount = containerWidth / 2;
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  };

  return (
    <div className="ml-8 p-10 md:p-7 sm:p-3 mx-auto rounded-3xl shadow-none text-primary max-w-[95vw] flex-col justify-center">
      <div className="flex items-center">
        <h1 className="absolute text-center xl:text-left 2xl:text-left md:text-left px-14 sm:px-2 pb-1 text-3xl font-bold  2xl:ml-14 xl:ml-14 md:ml-14 mb-[7rem] xl:mb-4 text-black pl-2 border-slate-200 border-b-2">Recommended Movie</h1>
        <div className={`flex justify-end flex-grow mb-5 md:ml-auto md:mr-0 ${isMobile ? 'hidden' : 'block'}`}>
          <button
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-gray-800 font-medium"
            onClick={() => handleSliderButtonClick('left')}
          >
            Previous
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-gray-800 font-medium ml-3"
            onClick={() => handleSliderButtonClick('right')}
          >
            Next
          </button>
        </div>
      </div>
      <div className="overflow-auto scroll-smooth grid grid-cols-1 sm:grid-cols-2 md:grid-cols- xl:grid-cols-8 gap-2 xl:gap-[15rem]" ref={containerRef}>
        <MovieRec />
      </div>
      <div className="flex justify-center mt-4"></div>
    </div>
  );
};

export default MovieRecDisplay;
