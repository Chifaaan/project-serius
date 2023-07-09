import React, { useRef, useEffect, useState } from 'react';
import AnimeItem from './AnimeItem';
import { DraggableCore } from 'react-draggable';

const MovieDisplay = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    setContainerWidth(container.offsetWidth);
  }, []);

  const handleDrag = (e, data) => {
    const container = containerRef.current;
    container.scrollLeft -= data.deltaX;
  };

  const handleSliderButtonClick = (direction) => {
    const container = containerRef.current;
    const scrollAmount = containerWidth / 2; // Use containerWidth instead of container.offsetWidth
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  };

  return (
    <div className="ml-8 p-10 md:p-7 sm:p-3 mx-auto rounded-3xl shadow-none text-primary max-w-[95vw] flex-col justify-center">
      <div className="flex items-center">
        <h1 className="absolute text-left px-2 pb-1 text-3xl font-bold ml-14 mb-4 text-black pl-2 border-slate-200 border-b-2">Recommended Anime</h1>
        <div className=" flex md:ml-[62rem] 2xl:ml-[98rem] mb-5">
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
        <AnimeItem />
      </div>
      <div className="flex justify-center mt-4"></div>
    </div>
  );
};

export default MovieDisplay;
