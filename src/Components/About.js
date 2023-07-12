import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
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
            Nama Otakuturu terinspirasi dari website yang merupakan project dari teman SMA saya yang biasa menggunakan nama Flav1n. Website ini merupakan website yang menampilkan Informasi-Informasi pada Film atuapun series anime seperti Durasi, Tahun rilis, Genre, Author/Director, Skor pada situs terpercaya dan lain lain. Website ini juga didesain responsive dengan patokan screen resolution Iphone 12 Pro pada Mobile. Pembuatan website ini menggunakan React JS, Tailwind CSS serta beberapa Framework dari Flowbite dan juga @material_tailwind. <br/>Tujuan pembuatan website ini agar pengguna dapat menemukan informasi yang diinginkan berdasarkan data Film dan anime yang kami punya. Informasi yang diberikan merupakan kumpulan kumpulan detail film ataupun anime secara ringkas, pengguna juga dapat mengunjungi situs film yang mereka pilih untuk menontonnya ataupun melakukan review. Informasi yang diberikan pada website ini diinput secara manual dan tanpa menggunakan database. karenanya, website ini belum dapat menampilkan Streaming dan Download sendiri, sehingga fitur tersebut dialihkan dengan redirect ke website lain. 
          </Typography>
        </CardBody>
        <CardFooter className="pt-0"></CardFooter>
      </Card>
    </div>
  );
}
