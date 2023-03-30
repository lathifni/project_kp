import React, { useEffect, useState } from 'react'
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import { Navigation } from '../Components/Navigation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Tambah = () => {
  const [validated, setValidated] = useState(false)
  const [idSK, setIdSK] = useState()
  const [idP, setIdP] = useState()
  const [listSubKegiatan, setListSubKegiatan] = useState([])
  const [listPengeluaran, setListPengeluaran] = useState([])
  const [nama, setNama] = useState("")
  const [total, setTotal] = useState("")
  const navigate = useNavigate()
  
  useEffect(() => {
    const getSubKegiatan = async () => {
      const res = await axios.get("http://127.0.0.1:8000/list/semualistSubKegiatan")
      setListSubKegiatan( res.data)
    }
    getSubKegiatan()
  }, [])
  
  useEffect(() => {
    const getPengeluaran = async () => {
      if (idSK !== undefined){
        const res = await axios.get(`http://127.0.0.1:8000/list/semualistPengeluaran/${idSK}`)
        setListPengeluaran(res.data)
      }
    }
    getPengeluaran()
  }, [idSK ,listPengeluaran])

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false)
    }
    setValidated(true)
    if (validated === true && idP !== undefined && nama !== '' && total !== '') {
      axios.post("http://127.0.0.1:8000/tambah/tambahNota", {
        idP,
        nama,
        total
      }).then(function (res) {
        console.log(res)
        if (res.status === 200 && res.data.ket === 'gagal') {
          window.alert(`${res.data.msg}`)
        } else {
          window.alert('Berhasil menambahkan nota')
          navigate('/home')
        }
      })
    }
  }

  const handleSK=(e)=>{
    const getId= e.target.value;
    setIdSK(getId);
    e.preventDefault();
  }

  const handleP=(event)=>{
    const getId= event.target.value;
    setIdP(getId);
    event.preventDefault();
  }
  
  return (
    <div>
      <Navigation />
      <div>
        <Row className="justify-content-center align-items-center">
          <Col md={8} lg={50} xs={12}>
            <Card className="shadow my-3">
              <Card.Body>
                <Card.Title className='displayLarge' style={{ textAlign: "center" }}>Tambah Nota </Card.Title>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Sub Kegiatan </Form.Label>
                        <Form.Select onChange={(e) => handleSK(e)} required>
                          <option>Silahkan pilih Sub Kegiatan</option>
                          {listSubKegiatan.map((SK) => (
                            <option key={SK.id} value={SK.id}>{SK.nama}</option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback>Memilih id {idSK}</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Pengeluaran</Form.Label>
                        <Form.Select onChange={(e) => handleP(e)} name='id_P5' required>
                          <option>Silahkan pilih Pengeluaran</option>
                          {listPengeluaran.map((P) => (
                            <option key={P.id} value={P.id}>{P.nama}</option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback>Memilih id {idP}</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" placeholder="Nama" name='nama' value={nama} onChange={(e) => setNama(e.target.value)} required/>
                        <Form.Control.Feedback type="invalid">
                          Mohon masukkan Nama
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Total</Form.Label>
                        <Form.Control type="number" placeholder="Total" name='=total' value={total} onChange={(e) => setTotal(e.target.value)} required />
                        <Form.Control.Feedback type="invalid">
                          Mohon masukkan Jumlah
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Check
                          required
                          label="Data Sudah Benar"
                          feedback="Centang dan Pastikan Semua Data Benar"
                          feedbackType="invalid"
                        />
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
    </div>
  )
}