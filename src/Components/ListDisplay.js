import React from 'react';
import ListItem from './ListItem';
import { DraggableCore } from 'react-draggable';

const ListDisplay = () => {
  const handleDrag = (e, data) => {
  const container = e.target;
  container.scrollLeft -= data.deltaX;
  };
  return (
    <DraggableCore onDrag={handleDrag}>
    <div className="ml-8 p-10 md:p-7 sm:p-3 mx-auto my-10 rounded-3xl shadow-none text-primary max-w-[90vw] flex-col justify-center">
      <div className="flex items-center">
        <h1 className=" text-left px-2 pb-1 text-3xl font-bold ml-14 mb-4 text-black pl-2 border-slate-200 border-b-2">Anime List</h1>
      </div>
      <div className=" scroll-smooth grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2  xl:gap-20 2xl:gap-[1rem]">

       <ListItem/>


      </div>

    </div>
    </DraggableCore>
  );
};

export default ListDisplay;