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
 
function Trending3() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
 
  return (
    <React.Fragment>
      <Card
        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          alt="Poster"
          className="h-full w-full object-center"
          src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/02/21/jujutsu-kaisen-anime-1419799196.jpg"
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
                Jujutsu Kaisen
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
        <DialogBody divider={true} className="p-0 mr-4">
          <img
            class="float-left"
            alt="poster"
            className="h-[15.6rem] ml-5 float-left object-cover object-center rounded-lg"
            src="https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
          />
          <div class="ml-[13rem]">
          <Typography variant="h3" color="blue-gray">
            Sinopsis
          </Typography>
          <Typography variant="Paragraph" color="blue-gray">
          Iseng-iseng terlibat dalam kegiatan paranormal tak berdasar dengan Klub Gaib, siswa sekolah menengah Yuuji Itadori menghabiskan hari-harinya di ruang klub atau rumah sakit, di mana ia mengunjungi kakeknya yang terbaring di tempat tidur. Namun, gaya hidup santai ini segera berubah menjadi aneh ketika dia tanpa sadar menemukan benda terkutuk. Memicu rangkaian kejadian supernatural, Yuuji menemukan dirinya tiba-tiba didorong ke dunia Kutukan — makhluk mengerikan yang terbentuk dari kebencian dan kenegatifan manusia — setelah menelan benda tersebut, yang ternyata adalah jari milik iblis Sukuna Ryoumen, "Raja Kutukan". ."

Yuuji mengalami langsung ancaman Kutukan ini terhadap masyarakat saat dia menemukan kekuatan barunya sendiri. Diperkenalkan ke Sekolah Menengah Teknik Jujutsu Metropolitan Tokyo, dia mulai berjalan di jalan yang tidak bisa dia kembalikan — jalan penyihir Jujutsu.
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
                Gege Akutami
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Genre
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Action, Comedy, Fantasy, Monster
              </Typography>
            </div>
          </div>
          
          <a href="https://anoboy.monster/2020/09/jujutsu-kaisen-tv/">
          <Button
            size="sm"
            variant="gradient"
            className="flex items-center gap-2"
          >
            <FilmIcon className="h-4 w-4" /> Watch Now!
          </Button>

          </a>
          <a href="https://myanimelist.net/anime/40748/Jujutsu_Kaisen">
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
export default Trending3;