import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import axios from 'axios'

export const UbahPengeluaran = () => {
  const [validated, setValidated] = useState(false)
  const [nama, setNama] = useState("")
  const [rek_P5, setRek_P5] = useState("")
  const [triwulan1, setTriwulan1] = useState()
  const [triwulan2, setTriwulan2] = useState()
  const [triwulan3, setTriwulan3] = useState()
  const [triwulan4, setTriwulan4] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const dataPengeluaran = async () => {
      const data = await axios.get(`http://127.0.0.1:8000/list/Pengeluaran/${id}`)
      setNama(data.data.nama)
      setRek_P5(data.data.rek_P5)
      setTriwulan1(data.data.triwulan1)
      setTriwulan2(data.data.triwulan2)
      setTriwulan3(data.data.triwulan3)
      setTriwulan4(data.data.triwulan4)
    }
    dataPengeluaran()
  }, [])

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false)
    }
    setValidated(true)
    if (validated === true && nama!=='' && rek_P5!==''){
      console.log(`${rek_P5} ${nama}`)
      axios.post(`http://127.0.0.1:8000/edit/editPengeluaran/${id}`, {
        rek_P5,
        nama,
        triwulan1,
        triwulan2,
        triwulan3,
        triwulan4
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
              <Card.Title className='displayLarge' style={{ textAlign: "center" }}>Ubah Pengeluaran </Card.Title>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nama Pengeluaran</Form.Label>
                      <Form.Control type="text" value={nama} onChange={(e) => setNama(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Nama Pengeluaran
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nomor Rekening</Form.Label>
                      <Form.Control type="text" value={rek_P5} onChange={(e) => setRek_P5(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Nomor Rekening
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Triwulan 1</Form.Label>
                      <Form.Control type="number" value={triwulan1} onChange={(e) => setTriwulan1(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Jumlah
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Triwulan 2</Form.Label>
                      <Form.Control type="number" value={triwulan2} onChange={(e) => setTriwulan2(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Jumlah
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Triwulan 3</Form.Label>
                      <Form.Control type="number" value={triwulan3} onChange={(e) => setTriwulan3(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Jumlah
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Triwulan 4</Form.Label>
                      <Form.Control type="number" value={triwulan4} onChange={(e) => setTriwulan4(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Jumlah
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div >
                      <Button className="mr-3" variant="primary" type="button" onClick={handleSubmit}>Simpan Perubahan </Button>
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