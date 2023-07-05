import React from 'react';
import { Button } from "@material-tailwind/react";
import {ArrowLongRightIcon,} from "@heroicons/react/24/outline";
import Anime1 from './Anime1';
import Anime2 from './Anime2';

const MovieDisplay = () => {
  return (
    <div className="bg-gray-300 rounded-3xl max-w-full mx-auto ml-4 mr-4 p-4">
        <div className="flex items-center">
      <h1 className="text-left text-3xl font-bold ml-5 mb-4">Anime List</h1>
        <div className ="py-2 px-4 ml-auto">
      <Button variant="text" className="flex items-center gap-2">
        See More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
      </Button>
      </div>
      </div>
      <div className="mb-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[12em]">
    <Anime1 />
    <Anime2 />
      </div>
    </div>
  );
};

export default MovieDisplay;