import React, { useState } from 'react'
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const TambahAkun = () => {
    const [validated, setValidated] = useState(false)
    const [nama, setNama] = useState("")
    const [NIP, setNIP] = useState("")
    const [TTL, setTTL] = useState("")
    const [alamat, setAlamat] = useState("")
    const [telp, setTelp] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        console.log(role)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(false)
        }
        setValidated(true)
        if (validated === true && nama !== '' && NIP !== '' && TTL !== '' && alamat !== '' && telp !== '' && role !== '') {
            axios.post(`http://127.0.0.1:8000/tambah/tambahAkun`, {
                nama,
                NIP,
                TTL,
                alamat,
                telp,
                role
            })
            // navigate('/home')
        }
    }
    return (
        <div>
            <Row className="justify-content-center align-items-center">
                <Col md={8} lg={50} xs={12}>
                    <Card className="shadow my-3">
                        <Card.Body>
                            <Card.Title className='displayLarge' style={{ textAlign: "center" }}>Tambah Akun </Card.Title>
                            <div className="mb-3 mt-md-4">
                                <div className="mb-3">
                                    <Form noValidate={false} validated={validated} >
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nama</Form.Label>
                                            <Form.Control type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
                                            <Form.Control.Feedback type="invalid">
                                                Mohon masukkan Nama
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>NIP</Form.Label>
                                            <Form.Control type="number" placeholder="NIP" value={NIP} onChange={(e) => setNIP(e.target.value)} required />
                                            <Form.Control.Feedback type="invalid">
                                                Mohon masukkan NIP
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Tempat, Tanggal Lahir</Form.Label>
                                            <Form.Control type="text" placeholder="Tempat, Tanggal Lahir" value={TTL} onChange={(e) => setTTL(e.target.value)} required />
                                            <Form.Control.Feedback type="invalid">
                                                Mohon masukkan Tempat, Tanggal Lahir
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Alamat</Form.Label>
                                            <Form.Control type="text" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} required />
                                            <Form.Control.Feedback type="invalid">
                                                Mohon masukkan Alamat
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Telp</Form.Label>
                                            <Form.Control type="number" placeholder="Telp" value={telp} onChange={(e) => setTelp(e.target.value)} required />
                                            <Form.Control.Feedback type="invalid">
                                                Mohon masukkan Telp
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Role</Form.Label>
                                            {/* <Form.Control type="number" placeholder="Telp" value={telp} onChange={(e) => setTelp(e.target.value)} required /> */}
                                            <Form.Select onChange={(e) => setRole(e.target.value)} name='id_P5' required>
                                                <option>Silahkan pilih Role</option>
                                                <option key={'user'} value={'user'}>User</option>
                                                <option key={'bendahara'} value={'bendahara'}>Bendahara</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Mohon masukkan Telp
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <div >
                                            <Button className="mr-3" variant="primary" type="button" onClick={handleSubmit}>Simpan</Button>
                                            <Button variant="danger" type="submit" href="/home">Batal</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
