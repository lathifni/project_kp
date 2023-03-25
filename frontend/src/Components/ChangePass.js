import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import axios from 'axios';

export const ChangePass = () => {
  const [validated, setValidated] = useState(false)
  const [idP, setIdP] = useState()
  const [NIP, setNIP] = useState()
  const [passLama, setPassLama] = useState()
  const [passBaru, setPassBaru] = useState()
  const [konfirmasiPassBaru, setKonfirmasiPassBaru] = useState()
  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false)
    }
    setValidated(true)
    if (validated === true && passLama!=='' && passBaru!=='' && konfirmasiPassBaru!==''){
      const NIP = sessionStorage.getItem('NIP')
      console.log(`${passLama} lalu ${passBaru} terus ${konfirmasiPassBaru} NIP ${NIP}`)
      axios.post('http://127.0.0.1:8000/auth/changePass', {
        NIP,
        passLama,
        passBaru,
        konfirmasiPassBaru
      }).then(function (res) {
        console.log(res)
        if (res.status === 400){
          window.alert('Masukkan Data yang Benar dan Pastikan Konfirmasi sesuai dengan Password Baru')
        } else {
          navigate('/home')
        }
      }).catch((err) => {
        window.alert('Gagal Mengganti Password')
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
              <Card.Title className='displayLarge' style={{ textAlign: "center" }}>Change Password </Card.Title>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  <Form noValidate={false} validated={validated} >
                    <Form.Group className="mb-3">
                      <Form.Label>Password Lama</Form.Label>
                      <Form.Control type="password" placeholder="Password Lama" name='PassdLama' value={passLama} onChange={(e) => setPassLama(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Password Lama
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password Baru</Form.Label>
                      <Form.Control type="password" placeholder="Password Baru" name='=PasswordBaru' value={passBaru} onChange={(e) => setPassBaru(e.target.value)}required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Password Baru
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Konfirmasi Password Baru</Form.Label>
                      <Form.Control type="password" placeholder="Konfirmasi Password Baru" name='=KonfirmasiPasswordBaru' value={konfirmasiPassBaru} onChange={(e) => setKonfirmasiPassBaru(e.target.value)} required />
                      <Form.Control.Feedback type="invalid">
                        Mohon masukkan Konfirmasi Password Baru
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div >
                      <Button className="mr-3" variant="primary" type="button" onClick={handleSubmit} >Simpan</Button>
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
