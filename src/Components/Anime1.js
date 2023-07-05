import React from "react";
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
import { HeartIcon, ShareIcon, FilmIcon } from "@heroicons/react/24/solid";
import Rating from './Rating';


function Anime1() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
 
  return (
    <React.Fragment>
      <Card
        className="bg-white h-64 w-96 mx-[50px] rounded-lg shadow-xl cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        
        onClick={handleOpen}
      >
        <img
          alt="Poster"
          className="w-full h-auto rounded-md mb-4"
          src="https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png"
        />
        
      </Card>
      
      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              <Typography
                variant="h4"
                color="blue-gray"
                className="font-medium"
              >
                Kimetsu no Yaiba
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
        <DialogBody divider={true} className="p-0">
          <img
            class="float-left"
            alt="poster"
            className="h-[20.5rem] ml-5 float-left object-cover object-center rounded-lg"
            src="https://cdn.myanimelist.net/images/anime/1786/107453l.jpg"
          />
        <div class="ml-[17rem]">
          <Typography variant="h3" color="blue-gray">
            Sinopsis
          </Typography>
          <Typography variant="Paragraph" color="blue-gray">
          Sejak kematian ayahnya, beban menghidupi keluarga berada di pundak Tanjirou Kamado. Meski hidup melarat di gunung terpencil, keluarga Kamado bisa menikmati kehidupan yang relatif damai dan bahagia. Suatu hari, Tanjirou memutuskan untuk pergi ke desa setempat untuk menghasilkan sedikit uang dengan menjual arang. Dalam perjalanan pulang, malam tiba, memaksa Tanjirou berlindung di rumah seorang pria aneh, yang memperingatkannya tentang keberadaan setan pemakan daging yang mengintai di hutan pada malam hari.

        Ketika dia akhirnya tiba di rumah keesokan harinya, dia bertemu dengan pemandangan yang mengerikan — seluruh keluarganya telah dibantai. Lebih buruk lagi, satu-satunya yang selamat adalah saudara perempuannya Nezuko, yang telah berubah menjadi iblis yang haus darah. Dikonsumsi oleh amarah dan kebencian, Tanjirou bersumpah untuk membalaskan dendam keluarganya dan tinggal bersama satu-satunya saudara kandungnya yang tersisa. Bersamaan dengan kelompok misterius yang menyebut diri mereka Korps Pembunuh Iblis, Tanjirou akan melakukan apa pun untuk membunuh iblis dan melindungi sisa-sisa kemanusiaan saudara perempuan tercintanya.
          </Typography>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16 ">
            <div>
            <Rating/>
              <Typography color="yellow" className="font-medium">
                5/5
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Author
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Koyoharu Gotouge
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Genre
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Action, Monster, Fantasy
              </Typography>
            </div>
          </div>
          
          <a href="https://anoboy.monster/2019/04/nonton-kimetsu-no-yaiba-season-1-2-3/">
          <Button
            size="sm"
            variant="gradient"
            className="flex items-center gap-2"
          >
            <FilmIcon className="h-4 w-4" /> Watch Now!
          </Button>

          </a>
          <a href="https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba">
          <Button
            size="sm"
            variant="outlined"
            className="flex items-center gap-3"
          >
            <ShareIcon className="h-4 w-4" /> Review
          </Button>

          </a>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}
export default Anime1;