import React, { useEffect, useState } from 'react'
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const TambahProgram = () => {
  const [validated, setValidated] = useState(false)
  const [nama, setNama] = useState("")
  const [rek_P4, setRek_P4] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false)
    }
    setValidated(true)
    if (validated === true && nama !== '' && rek_P4 !== '') {
      axios.post(`http://127.0.0.1:8000/tambah/tambahProgram`, {
        rek_P4,
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
              <Card.Title className='displayLarge' style={{ textAlign: "center" }}>Tambah Program </Card.Title>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  <Form noValidate={false} validated={validated} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nama Program</Form.Label>
                      <Form.Control type="text" placeholder="Nama Program" value={nama} onChange={(e) => setNama(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Nama Program
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nomor Rekening</Form.Label>
                      <Form.Control type="text" placeholder="Nomor Rekening" value={rek_P4} onChange={(e) => setRek_P4(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Nomor Rekening
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