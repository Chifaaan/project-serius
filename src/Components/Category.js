import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";


const images =[
    {
        id:1,
        imageUrl:"https://asset-2.tstatic.net/style/foto/bank/images/poster-mission-impossible-dead-reckoning-part-one.jpg",
        title:"Movie",
        to:"/movie"
    },
    {
        id:2,
        imageUrl:"https://i.pinimg.com/736x/04/57/3a/04573a91fdc61d12e7380115c5175ca2.jpg",
        title:"Anime",
        to:"/anime"
    },
]

export default function Example() {
const [open, setOpen] = useState(false);
const [hover, setHover] = useState(false);

const handleHover = () => setHover(true);
const handleHoverExit = () => setHover(false);
const handleOpen = () => setOpen((cur) => !cur);
  return (
<div className="border-2 flex flex-col items-center mt-12 mb-16 px-4">
  <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 2xl:grid-cols-2">
    {images.map((image) => (
      <a href={image.to} key={image.id}>
        <Card
          color="blue-gray"
          className=" h-32 w-64 sm:h-[20rem] xl:h-[25rem] sm:w-full relative mb-5 shadow-none cursor-pointer overflow-hidden transition-opacity hover:scale-105 duration-300"
          onClick={handleOpen}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <img
            src={image.imageUrl}
            alt="img-blur-shadow"
            className="relative overflow-hidden object-cover h-48 sm:h-full w-full"
          />
          <div className="px-2 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white transition-opacity duration-300">
            <div className="text-center">
              <h3 className="text-xl font-bold">{image.title}</h3>
            </div>
          </div>
        </Card>
      </a>
    ))}
  </div>
</div>


  );
}