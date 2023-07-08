import React from 'react';
import AnimeItem from './AnimeItem';
import { DraggableCore } from 'react-draggable';

const MovieDisplay = () => {
  const handleDrag = (e, data) => {
  const container = e.target;
  container.scrollLeft -= data.deltaX;
  };
  return (
    <DraggableCore onDrag={handleDrag}>
    <div className="ml-8 p-10 md:p-7 sm:p-3 mx-auto rounded-3xl shadow-none text-primary max-w-[90vw] flex-col justify-center">
      <div className="flex items-center">
        <h1 className=" text-left px-2 pb-1 text-3xl font-bold ml-14 mb-4 text-black pl-2 border-slate-200 border-b-2">Recommended Anime</h1>
      </div>
      <div className=" overflow-auto scroll-smooth grid grid-cols-1 sm:grid-cols-2 md:grid-cols- xl:grid-cols-8 gap-2 xl:gap-[15rem]">

       <AnimeItem/>


      </div>

    </div>
    </DraggableCore>
  );
};

export default MovieDisplay;