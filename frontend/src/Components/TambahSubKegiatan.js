import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import axios from 'axios'

export const TambahSubKegiatan = () => {
  const [validated, setValidated] = useState(false)
  const [nama, setNama] = useState("")
  const [rek_PKSk4, setRek_PKSk4] = useState("")
  const id = useParams()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false)
    }
    setValidated(true)
    if (validated === true && nama!=='' && rek_PKSk4!==''){
      const rek_PK4 = id.rek_PK4
      console.log(`${rek_PK4} ${rek_PKSk4} ${nama}`)
      axios.post(`http://127.0.0.1:8000/tambah/tambahSubKegiatan/${id.rek_PK4}`, {
        rek_PK4,
        rek_PKSk4,
        nama
    })
      navigate('/home')
    }
  }
    return (
        <div>
      <Row className="justify-content-center align-items-center">
        <Col md={8} lg={50} xs={12}>
          <Card className="shadow my-3">
            <Card.Body>
              <Card.Title className='displayLarge' style={{ textAlign: "center" }}>Tambah Sub Kegiatan </Card.Title>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nama Sub Kegiatan</Form.Label>
                      <Form.Control type="text" placeholder="Nama Sub Kegiatan" value={nama} onChange={(e) => setNama(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Nama
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nomor Rekening</Form.Label>
                      <Form.Control type="text" placeholder="Nomor Rekening" value={rek_PKSk4} onChange={(e) => setRek_PKSk4(e.target.value)}required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Jumlah
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