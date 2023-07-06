import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  Card,
} from "@material-tailwind/react";
import FrontPannur from '../images/Foto LTMPT Pannur.png';
import Irfan from '../images/Irfan.jpg'

const Pannur = () => {
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
            img src= {FrontPannur}
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
                  Muhammad Nur Irfan
                </Typography>
              </div>
            </div>
          </DialogHeader>
          <DialogBody divider={true} className="p-0">
            <div>
                <table border="1" align="center">
                    <tr>
                        <th colspan="3" bgcolor="yellow">BIODATA</th>
                    </tr>
                    <tr>
                        <td rowspan="8"><img src={Irfan} width="200" height="300"/></td>
                        <td>Nama</td>
                        <td>Muhammad Nur Irfan</td>
                    </tr>
                    <tr>
                        <td>Tempat/Tgl Lahir</td>
                        <td> Jakarta Selatan, 26-Juni-2004</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>Laki-Laki</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>Jl. Kangguru 3 No.1,RT 010 / RW 013, Halim Perdanakusuma, Makasar, Jakarta Timur</td>
                    </tr>
                    <tr>
                        <td>Agama</td>
                        <td>Islam</td>
                    </tr>
                    <tr>
                        <td>Pekerjaan</td>
                        <td>Mahasiswa</td>
                    </tr>
                    <tr>
                        <td>Kewarganegaraan</td>
                        <td>Warga Negara Indonesia (WNI)</td>
                    </tr>
                    <tr>
                        <td>Hobi</td> 
                        <td><ul>
                            <li>Bermain Game</li>
                            <li>Menyanyi</li>
                            <li>Menonton Film</li>
                            <li>Bermain Voli</li>
                        </ul></td>
                    </tr>
                </table>
            </div>
          </DialogBody>
        </Dialog>
      </React.Fragment>
    );
}

export default Pannur