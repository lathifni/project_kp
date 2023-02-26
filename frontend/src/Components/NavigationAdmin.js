import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Kontrol Keuangan</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#features">Gabungan</Nav.Link>
                        <Nav.Link href="#pricing">Kegiatan</Nav.Link>
                        <Nav.Link href="/tambah">Tambah Nota</Nav.Link>
                        <Nav.Link href="#tambah">Akun</Nav.Link>
                        <NavDropdown title="Tambah" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Program</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Kegiatan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sub Kegiatan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Pengeluaran</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/">Keluar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
