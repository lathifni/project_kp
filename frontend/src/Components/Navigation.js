import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
    // if (sessionStorage.getItem('role') === 'user'){
        // return (
        //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //         <Container>
        //             <Navbar.Brand>
        //                 <img src='./logoSumbar.png' alt="Sumbar" width={30} height={4} />
        //             </Navbar.Brand>
        //             <Navbar.Brand href="/home">SI Kontrol Keuangan</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //             <Navbar.Collapse id="responsive-navbar-nav">
        //                 <Nav className="me-auto">
        //                     <Nav.Link href="/home">Home <i class="bi bi-house-door"></i></Nav.Link>
        //                     <Nav.Link href="/kegiatan">Kegiatan <i class="bi bi-card-list"></i></Nav.Link>
        //                     <Nav.Link href="/tambah">Tambah Nota <i class="bi bi-file-earmark-plus"></i></Nav.Link>
        //                 </Nav>
        //                 <Nav>
        //                     <Nav.Link eventKey={2} href="/changePassword">Ganti Password <i class="bi bi-arrow-clockwise"></i></Nav.Link>
        //                     <Nav.Link eventKey={2} href="/">Keluar <i class="bi bi-box-arrow-right"></i></Nav.Link>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // )
    // } else {
    //     return (
    //         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //             <Container>
    //                 <Navbar.Brand>
    //                     <img src='./logoSumbar.png' alt="Sumbar" width={30} height={4}/>
    //                 </Navbar.Brand>
    //                 <Navbar.Brand href="/home">SI Kontrol Keuangan</Navbar.Brand>
    //                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //                 <Navbar.Collapse id="responsive-navbar-nav">
    //                     <Nav className="me-auto">
    //                     <Nav.Link href="/home">Home</Nav.Link>
    //                         <Nav.Link href="/kegiatan">Kegiatan</Nav.Link>
    //                         <Nav.Link href="/tambah">Tambah Nota</Nav.Link>
    //                         <Nav.Link href="/statusNota">Status Nota</Nav.Link>
    //                     </Nav>
    //                     <Nav>
    //                         <Nav.Link eventKey={2} href="/changePassword">Ganti Password</Nav.Link>
    //                         <Nav.Link eventKey={2} href="/keluar">Keluar</Nav.Link>
    //                     </Nav>
    //                 </Navbar.Collapse>
    //             </Container>
    //         </Navbar>
    //     )
    // }

    if (sessionStorage.getItem('role') === 'admin') {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img src='./logoSumbar.png' alt="Sumbar" width={30} height={4} />
                    </Navbar.Brand>
                    <Navbar.Brand href="/home">SI Kontrol Keuangan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home </Nav.Link>
                            <Nav.Link href="/akun">Akun </Nav.Link>
                            {/* <NavDropdown title="Tambah" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Program</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Kegiatan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Sub Kegiatan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Pengeluaran</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/changePassword">Ganti Password <i className="bi bi-arrow-clockwise"></i></Nav.Link>
                            <Nav.Link eventKey={2} href="/">Keluar <i className="bi bi-box-arrow-right"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    } else if (sessionStorage.getItem('role') === 'bendahara') {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img src='./logoSumbar.png' alt="Sumbar" width={30} height={4} />
                    </Navbar.Brand>
                    <Navbar.Brand href="/home">SI Kontrol Keuangan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/home">Home </Nav.Link>
                            <Nav.Link href="/kegiatan">Kegiatan </Nav.Link>
                            <Nav.Link href="/nota">Nota </Nav.Link>
                            <Nav.Link href="/tambah">Tambah Nota </Nav.Link>
                            <Nav.Link href="/konfirmasiNota">Konfirmasi Nota </Nav.Link>
                            <Nav.Link href="/notaDibayarkan">Nota Dibayarkan </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/changePassword">Ganti Password <i className="bi bi-arrow-clockwise"></i></Nav.Link>
                            <Nav.Link eventKey={2} href="/keluar">Keluar <i className="bi bi-box-arrow-right"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    } else {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img src='./logoSumbar.png' alt="Sumbar" width={30} height={4} />
                    </Navbar.Brand>
                    <Navbar.Brand href="/home">SI Kontrol Keuangan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/kegiatan">Kegiatan </Nav.Link>
                            <Nav.Link href="/nota">Nota </Nav.Link>
                            <Nav.Link href="/tambah">Tambah Nota </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/changePassword">Ganti Password <i className="bi bi-arrow-clockwise"></i></Nav.Link>
                            <Nav.Link eventKey={2} href="/">Keluar <i className="bi bi-box-arrow-right"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
   
}
