import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { HeartIcon, ArrowDownTrayIcon, FilmIcon } from "@heroicons/react/24/solid";

function AnimeItem({ imageUrl, title, synopsis, DiaimageUrl,WatchUrl, RevUrl, Author, Genre, Year, Skor }) {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(true);
  const handleHoverExit = () => setHover(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  return (
    <>
      <Card
        className="mb-5 shadow-none h-[300px] w-[220px] mx-[50px] cursor-pointer overflow-hidden transition-opacity hover:scale-105 duration-300 relative"
        onClick={handleOpen}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
      >
        <img alt="Poster" className="h-[355px] w-[233px] rounded object-center" src={imageUrl} />
        {hover && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white transition-opacity duration-300">
            <div className="text-center">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-md">({Year})</p>
            </div>
        </div>
        )}
      </Card>
      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              <Typography variant="h4" color="blue-gray" className="font-medium">
                {title}
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              size="sm"
              color={isFavorite ? "red" : "blue-gray"}
              onClick={handleIsFavorite}
            >
              <HeartIcon className="h-5 w-5" />
            </IconButton>
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-0 mr-4 md-1 mt-1">
          <img
            alt="poster"
            className="max-h-[20.5rem] w-auto ml-5 pt-2 pb-1 float-left overflow-hidden object-cover object-center rounded-3xl"
            src={DiaimageUrl}
          />
          <div className="ml-[17rem]">
            <Typography variant="h3" color="blue-gray">
              Sinopsis
            </Typography>
            <Typography variant="Paragraph" color="blue-gray" className="pb-3">
              {synopsis}
            </Typography>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16 ">
          <div>
          <Typography variant="small" color="gray" className="font-normal">
                Skor MAL
              </Typography>
              <div className="px-4 bg-orange-200 rounded-md">
              <Typography color="yellow" textGradient className="font-medium">
                {Skor}
            </Typography>
              </div>
            </div>
            <div>
            <Typography variant="small" color="gray" className="font-normal">
                Author
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {Author}
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Genre
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {Genre}
              </Typography>
            </div>
         </div>

          <a 
          target="_blank"
          rel="noopener noreferrer" 
          href={WatchUrl}>
            <Button size="sm" variant="gradient" className="flex items-center gap-2">
              <FilmIcon className="h-4 w-4" /> Watch Now!
            </Button>
          </a>
          <a
          target="_blank"
          rel="noopener noreferrer" 
          className="mr-4"
          href={RevUrl}>
            <Button size="sm" variant="outlined" className="flex items-center gap-3">
              <ArrowDownTrayIcon className="h-4 w-4" /> Download
            </Button>
          </a>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default AnimeItem;