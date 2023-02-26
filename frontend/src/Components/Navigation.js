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
                        <Nav.Link href="/gabungan">Gabungan</Nav.Link>
                        <Nav.Link href="/kegiatan">Kegiatan</Nav.Link>
                        <Nav.Link href="/tambah">Tambah Nota</Nav.Link>

                        <Nav.Link href="/akun">Akun</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/">Keluar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
