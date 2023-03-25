import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import axios from 'axios'

export const UbahKegiatan = () => {
  const [validated, setValidated] = useState(false)
  const [nama, setNama] = useState("")
  const [rek_PK4, setRek_PK4] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const dataKegiatan = async () => {
      const data = await axios.get(`http://127.0.0.1:8000/list/Kegiatan/${id}`)
      setNama(data.data.nama)
      setRek_PK4(data.data.rek_PK4)
    }
    dataKegiatan()
  }, [])

  const handleSubmit = (event) => {
    console.log(id)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false)
    }
    setValidated(true)
    if (validated === true && nama!=='' && rek_PK4!==''){
      const rek_P4 = id
      console.log(`${rek_P4} ${rek_PK4} ${nama}`)
      axios.post(`http://127.0.0.1:8000/edit/editKegiatan/${id}`, {
        rek_P4,
        rek_PK4,
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
              <Card.Title className='displayLarge' style={{ textAlign: "center" }}>Ubah Kegiatan </Card.Title>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  <Form noValidate={false} validated={validated} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nama Kegiatan</Form.Label>
                      <Form.Control type="text" value={nama} onChange={(e) => setNama(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Nama Kegiatan
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nomor Rekening</Form.Label>
                      <Form.Control type="text" value={rek_PK4} onChange={(e) => setRek_PK4(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Nomor Rekening
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div >
                      <Button className="mr-3" variant="primary" type="button" onClick={handleSubmit}>Simpan Perubahan</Button>
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