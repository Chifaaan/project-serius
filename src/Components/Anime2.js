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


function Anime2() {
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
                Demon Slayer
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
            className="h-[20.5rem] float-left object-cover object-center rounded-lg"
            src="https://photo.kontan.co.id/photo/2020/12/10/86894998p.jpg"
          />
        <div class="ml-[15.5rem]">
          <Typography variant="h3" color="blue-gray">
            Sinopsis
          </Typography>
          <Typography variant="Paragraph" color="blue-gray">
          Berabad-abad yang lalu, umat manusia dibantai hingga hampir punah oleh makhluk humanoid mengerikan yang disebut Titans, memaksa manusia bersembunyi ketakutan di balik tembok konsentris yang sangat besar. Apa yang membuat raksasa ini benar-benar menakutkan adalah selera mereka akan daging manusia tidak lahir dari rasa lapar, tetapi tampaknya karena kesenangan. Untuk memastikan kelangsungan hidup mereka, sisa-sisa umat manusia mulai hidup dalam penghalang pertahanan, menghasilkan seratus tahun tanpa satu pun pertemuan titan. Namun, ketenangan yang rapuh itu segera hancur ketika Titan kolosal berhasil menembus tembok luar yang konon tak tertembus, menyalakan kembali perjuangan untuk bertahan hidup melawan kekejian pemakan manusia.

Setelah menyaksikan kerugian pribadi yang mengerikan di tangan makhluk yang menyerang, Eren Yeager mendedikasikan hidupnya untuk membasmi mereka dengan mendaftar ke Survey Corps, unit militer elit yang memerangi humanoid tanpa ampun di luar perlindungan tembok. Eren, adik angkatnya Mikasa Ackerman, dan teman masa kecilnya Armin Arlert bergabung dalam perang brutal melawan para Titan dan berlomba untuk menemukan cara mengalahkan mereka sebelum tembok terakhir ditembus.
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
                Hajime Isayama
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Genre
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Action, Gore, Survival
              </Typography>
            </div>
          </div>
          
          <a href="https://anoboy.monster/2016/04/shingeki-no-kyojin-attack-titan-indo/">
          <Button
            size="sm"
            variant="gradient"
            className="flex items-center gap-2"
          >
            <FilmIcon className="h-4 w-4" /> Watch Now!
          </Button>

          </a>
          <a href="https://myanimelist.net/anime/16498/Shingeki_no_Kyojin">
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
export default Anime2;