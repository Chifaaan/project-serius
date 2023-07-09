import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon, ArrowDownTrayIcon, FilmIcon } from "@heroicons/react/24/solid";

function ButtonItem({ title, synopsis, DiaimageUrl,WatchUrl, RevUrl, Author, Genre, Skor }) {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  return (
    <>
      <Button
        size="lg"
        color="white"
        onClick={handleOpen}
      > Read More
      </Button>
      <div className="w-full overflow-y-auto">
      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              <Typography variant="h4" color="blue-gray" className="font-medium font-bold">
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
        <DialogBody divider={true} className="p-0 mr-4 md-1 mt-1 h-[35rem] sm:h-full overflow-y-auto  ">
          <img
            alt="poster"
            className="sm:absolute ml-24 sm:w-[13.5rem] max-h-[20.5rem] sm:max-h-[20.5rem] sm:object-center px-4 ml-2 pt-2 pb-1 sm:float-left overflow-hidden object-cover rounded-3xl sm:ml-2 sm:mt-2 sm:mb-2"
            src={DiaimageUrl}
          />
          <div className="ml-4 sm:ml-0 sm:mt-4">
            <Typography variant="h3" color="blue-gray" className="sm:ml-[14rem] flex-none 2xl:md-0 2xl:flex">
              Sinopsis
            </Typography>
            <Typography variant="Paragraph" color="blue-gray" className=" sm:ml-[14rem] pb-3">
              {synopsis}
            </Typography>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-8 sm:gap-4 mb-4">
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

          <div className="flex ml-20 sm:ml-0 flex-row sm:flex-row gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={WatchUrl}
            >
              <Button size="sm" variant="gradient" className="flex items-center gap-2">
                <FilmIcon className="h-4 w-4" /> Watch Now!
              </Button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
              href={RevUrl}
            >
              <Button size="sm" variant="outlined" className="flex items-center gap-3">
                <ArrowDownTrayIcon className="h-4 w-4" /> Download
              </Button>
            </a>
          </div>
        </DialogFooter>
      </Dialog>
    </div>
    </>
  );
}

export default ButtonItem;