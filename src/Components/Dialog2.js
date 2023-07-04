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
 
function Dialog2() {
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
          src="https://static.republika.co.id/uploads/images/inpicture_slide/manga-chainsaw_220318174721-530.jpg"
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
                Chainsaw Man
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
            className="h-[18.88rem] float-left object-cover object-center rounded-lg"
            src="https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
          />
          <div class="ml-[14rem]">
          <Typography variant="h3" color="blue-gray">
            Sinopsis
          </Typography>
          <Typography variant="Paragraph" color="blue-gray">
          Denji dirampok dari kehidupan remajanya yang normal, tidak memiliki apa-apa selain hutang ayahnya yang sangat besar. Teman satu-satunya adalah hewan peliharaannya, Pochita, iblis gergaji mesin, yang dengannya dia membunuh iblis demi uang yang pasti berakhir di saku yakuza. Yang bisa dilakukan Denji hanyalah memimpikan kehidupan yang baik dan sederhana: hidup dengan makanan enak dan pacar cantik di sisinya. Tapi tindakan pengkhianatan rakus oleh yakuza menyebabkan kematian Denji yang brutal dan terlalu cepat, menghancurkan semua harapan dia untuk mencapai kebahagiaan.

Hebatnya, kontrak lama memungkinkan Pochita untuk bergabung dengan almarhum Denji dan memberikan kekuatan iblis padanya, mengubahnya menjadi hibrida yang mampu mengubah bagian tubuhnya menjadi gergaji mesin. Karena kemampuan baru Denji menimbulkan risiko yang signifikan bagi masyarakat, pemburu setan elit Biro Keamanan Publik, Makima, membawanya masuk, membiarkannya hidup selama dia mematuhi perintahnya. Dipandu oleh janji kehidupan konten bersama seorang wanita yang menarik, Denji mencurahkan segalanya dan bertarung dengan sekuat tenaga untuk mewujudkan mimpinya yang naif.
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
                Tatsuki Fujimoto
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Genre
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Action, Gore, Fantasy, Monster
              </Typography>
            </div>
          </div>
          
          <a href="https://anoboy.monster/2022/10/chainsaw-man/">
          <Button
            size="sm"
            variant="gradient"
            className="flex items-center gap-2"
          >
            <FilmIcon className="h-4 w-4" /> Watch Now!
          </Button>

          </a>
          <a href="https://myanimelist.net/anime/44511/Chainsaw_Man">
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
export default Dialog2;