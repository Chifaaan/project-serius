import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import Logo from '../images/Otakuturu.png';

export default function Example() {
  return (
    <div className="flex flex-col items-center mt-10 px-5 sm:px-10 md:px-20">
      <Card className="w-full md:max-w-6xl">
        <CardBody>
          <Typography variant="h2" color="blue-gray" className="mb-2 text-center">
            About Website
          </Typography>
        </CardBody>
        <CardHeader color="blue-gray" className="relative h-32 md:h-80">
          <img src={Logo} alt="img-blur-shadow" className="object-cover w-full h-full" />
        </CardHeader>
        <CardBody>
          <Typography variant="lead" className="text-left">
            Nama Otakuturu terinspirasi dari website yang merupakan project dari teman SMA saya yang biasa menggunakan nama Flav1n. Website ini merupakan website yang menampilkan Anime Anime yang sedang trending. Pembuatan website ini menggunakan React JS, Tailwind CSS serta beberapa Framework dari Flowbite dan @material_tailwind. <br/>Tujuan pembuatan website ini agar pengguna dapat menemukan informasi yang diinginkan berdasarkan informasi data anime yang kami punya. Informasi yang diberikan merupakan kumpulan kumpulan detail anime secara spesifik sehingga memuaskan pengguna. Informasi yang diberikan pada website ini diinput secara manual dan tanpa menggunakan database. karenanya, website ini belum dapat menampilkan Streaming dan Download anime sendiri, sehingga fitur tersebut dialihkan dengan redirect ke website lain.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0"></CardFooter>
      </Card>
    </div>
  );
}
