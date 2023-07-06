import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  Card,
} from "@material-tailwind/react";
import FrontIwan from '../images/Formal Iwan.jpg'
import FotoIwan from '../images/Iwan.jpg'

const Iwan = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
   
    return (
      <React.Fragment>
        <Card
          className="h-64 w-96 mx-[50px] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
          onClick={handleOpen}
        >
          <img
            alt="Poster"
            className="h-full w-full object-center"
            img src={FrontIwan}
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
                  Muhammad Rachmadhani Kurniawan
                </Typography>
              </div>
            </div>
          </DialogHeader>
          <DialogBody divider={true} className="p-0">
           <div>
           <table align="center" border="1">
            <tr>
                <th colspan="3" bgcolor="yellow"> BIODATA </th>
            </tr>
            <tr>
                <td rowspan="8"><img src={FotoIwan} height="250" valign="middle"/></td>
                <td>Nama</td>
                <td>Muhammad Rachmadhani Kurniawan</td>
            </tr>
            <tr>
                <td>Tempat/Tgl.Lahir</td>
                <td>Jakarta, 01 November 2004</td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>Laki-Laki</td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td>Jl.Pangkalan Jati VII No.22 Rt.06/09, 
                    Kel. cipinang melayu, Kec. Makassar, 
                    Jakarta Timur, DKI Jakarta, 13620</td>
            </tr>
            <tr>
                <td>Agama</td>
                <td>Islam</td>
            </tr>
            <tr>
                <td>Pekerjaan</td>
                <td>Pelajar/Mahasiswa</td>
            </tr>
            <tr>
                <td>Kewarganegaraan</td>
                <td>Warga Negara Indonesia (WNI)</td>
            </tr>
            <tr>
                <td>Hobi</td>
                <td>
                    <ul>
                    <li>Main Game</li>
                    <li>Berenang</li>
                    <li>Bersepeda</li>
                    </ul>
                </td>
            </tr>
        </table>
           </div>
          </DialogBody>
        </Dialog>
      </React.Fragment>
    );
}

export default Iwan