import ListProgram from "./Components/ListProgram";
import {Table} from "./Components/Table"
import {TableCopy} from "./Components/TableCopy"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Gabungan } from "./Pages/Gabungan";
import { NotFound } from "./Pages/NotFound";
import { Login } from "./Pages/Login";
import { Tambah } from "./Pages/Tambah";
import { Kegiatan } from "./Pages/Kegiatan";
import { Akun } from "./Pages/Akun";

function App() {
  return (
    // <TestPage/>
    // <div>
    //   <TableCopy/>
    // </div>
    <Router>
      <Routes>
        <Route path='/home' element={<Gabungan />} />
        <Route path="/gabungan" element={<Gabungan/>}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='/tambah' element={<Tambah />} />
        <Route path='/keluar' element={<Login />} />
        <Route path='/kegiatan' element={<Kegiatan />} />
        <Route path='/akun' element={<Akun />} />
      </Routes>
    </Router>
  );
}

export default App;
