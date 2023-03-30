import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NotFound } from "./Pages/NotFound";
import { Login } from "./Pages/Login";
import { Tambah } from "./Pages/Tambah";
import { Kegiatan } from "./Pages/Kegiatan";
import { Akun } from "./Pages/Akun";
import { Home } from "./Pages/Home";
import { ChangePassword } from "./Pages/ChangePassword";
import { KonfirmasiNota } from "./Pages/KonfirmasiNota";
import { AddKegiatan } from "./Pages/AddKegiatan";
import { AddSubKegiatan } from "./Pages/AddSubKegiatan";
import { AddPengeluaran } from "./Pages/AddPengeluaran";
import { AddProgram } from "./Pages/AddProgram";
import { EditKegiatan } from "./Pages/EditKegiatan";
import { EditProgram } from "./Pages/EditProgram";
import { EditSubKegiatan } from "./Pages/EditSubKegiatan";
import { EditPengeluaran } from "./Pages/EditPengeluaran";
import { AddAkun } from "./Pages/AddAkun";
import { Nota } from "./Pages/Nota";
import { NotaDibayarkan } from "./Pages/NotaDibayarkan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/gabungan" element={<Home/>}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='/tambah' element={<Tambah />} />
        <Route path='/keluar' element={<Login />} />
        <Route path='/kegiatan' element={<Kegiatan />} />
        <Route path='/akun' element={<Akun />} />
        <Route path='/nota' element={<Nota />} />
        <Route path='/konfirmasiNota' element={<KonfirmasiNota />} />
        <Route path='/notaDibayarkan' element={<NotaDibayarkan />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/tambahProgram' element={<AddProgram />} />
        <Route path='/tambahKegiatan/:rek_P4' element={<AddKegiatan />} />
        <Route path='/tambahSubKegiatan/:rek_PK4' element={<AddSubKegiatan />} />
        <Route path='/tambahPengeluaran/:rek_PKSk4' element={<AddPengeluaran />} />
        <Route path='/editProgram/:id' element={<EditProgram />} />
        <Route path='/editKegiatan/:id' element={<EditKegiatan />} />
        <Route path='/editSubKegiatan/:id' element={<EditSubKegiatan />} />
        <Route path='/editPengeluaran/:id' element={<EditPengeluaran />} />
        <Route path='/addAkun' element={<AddAkun />} />
      </Routes>
    </Router>
  );
}

export default App;
