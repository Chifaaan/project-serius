import React, {useEffect, useState} from "react";
import Logo from '../images/Otakuturu.png';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";


function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="/anime" className="flex items-center hover:text-blue-500 transition-colors">
          Anime List
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="/movie" className="flex items-center hover:text-blue-500 transition-colors">
          Movie List
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="/About" className="flex items-center hover:text-blue-500 transition-colors">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a href="https://saweria.co/pannuromon" className="flex items-center hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
          Donation
        </a>
      </Typography>
    </ul>
  );
}


function Navbari(){
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => {
    setCurrentUrl(window.location.pathname)
  }, [])
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
    return(

<nav class="w-full border-black bg-[#06113C] dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen px-10 md:py-0 flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-2">
    <a href="/" class="flex items-center">
        <img src={Logo} class="h-12 sm:h-14 md:w-[21.5rem]" alt="Logo" />
    </a>
    <div className="hidden lg:block">
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        <Collapse open={openNav}>
        <NavList />
      </Collapse>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li className="flex-row">
          <a href="/" class={`${currentUrl === "/" ? "text-blue-700" : "text-white"} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Home</a>
        </li>
        <li>
          <a href="/anime" class={`${currentUrl === "/anime" ? "text-blue-700" : "text-white"} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>AnimeList</a>
        </li>
        <li>
          <a href="/movie" class={`${currentUrl === "/movie" ? "text-blue-700" : "text-white"} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>MovieList</a>
        </li>
        <li>
          <a href="/About" class={`${currentUrl === "/About" ? "text-blue-700" : "text-white"} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>AboutUs</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://saweria.co/pannuromon" class={`${currentUrl === "/Jadwal" ? "text-blue-700" : "text-white"} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Donasi</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default Navbari;