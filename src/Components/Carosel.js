import { Carousel } from 'flowbite-react';
import { Typography, Button} from "@material-tailwind/react";

export default function SlidingInterval() {
  return (
    <Carousel 
    slideInterval={5000}
    className="relative h-[70vh] max-w-full">
      <img 
      className="h-[70vh] w-full object-cover"
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
              <div className="absolute inset-0 grid h-[70vh] w-full bg-gradient-to-r from-gray-500">
          <div className="mt-[25rem] place-items-left text-left w-3/4 md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
            <div className="flex justify-left gap-2">
              <Button size="lg" color="white">
                Read More
              </Button>
            </div>
          </div>
        </div>
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  )
}