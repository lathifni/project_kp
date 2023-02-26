import React from 'react'
import { Col, Button, Row, Container, Card, Form, FloatingLabel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Login = () => {
  return (
    // <Section class="h-100 gradient-form" style="background-color: #eee;">
    //   <div class="container py-5 h-100">
    //     <div class="row d-flex justify-content-center align-items-center h-100">
    //       <div class="col-xl-10">
    //         <div class="card rounded-3 text-black">
    //           <div class="row g-0">
    //             <div class="col-lg-6">
    //               <div class="card-body p-md-5 mx-md-4">
    //                 <div class="text-center">
    //                   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"style="width: 185px;" alt="logo" />
    //                   <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
    //                 </div>
    //                 <Form>
    //                   <p>Please login to your account</p>
    //                   <div class="form-outline mb-4">
    //                     <input type="email" id="form2Example11" class="form-control"
    //                       placeholder="Phone number or email address" />
    //                     <label class="form-label" for="form2Example11">Username</label>
    //                   </div>
    //                   <div class="form-outline mb-4">
    //                     <input type="password" id="form2Example22" class="form-control" />
    //                     <label class="form-label" for="form2Example22">Password</label>
    //                   </div>
    //                   <div class="text-center pt-1 mb-5 pb-1">
    //                     <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
    //                       in</button>
    //                     <a class="text-muted" href="#!">Forgot password?</a>
    //                   </div>
    //                   <div class="d-flex align-items-center justify-content-center pb-4">
    //                     <p class="mb-0 me-2">Don't have an account?</p>
    //                     <button type="button" class="btn btn-outline-danger">Create new</button>
    //                   </div>
    //                 </Form>
    //               </div>
    //             </div>
    //             <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
    //               <div class="text-white px-3 py-4 p-md-5 mx-md-4">
    //                 <h4 class="mb-4">We are more than just a company</h4>
    //                 <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    //                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    //                   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Section>
    <>
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title className='displayLarge' style={{ textAlign: "center" }}>SELAMAT DATANG</Card.Title>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase" style={{ textAlign: "center" }}>SI Kontrol Keuangan Biro Organisasi Setda Prov Sumbar</h2>
                    <div className="mb-3"><br />
                      <Form>
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NIP</Form.Label>
                        <Form.Control type="number" placeholder="NIP" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group> */}

                        <FloatingLabel
                          controlId="floatingInput"
                          label="Nomor Induk Pegawai"
                          className="mb-3"
                        >
                          <Form.Control type="number" placeholder="name@example.com" required/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                          <Form.Control type="password" placeholder="Password" required/>
                        </FloatingLabel>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ><br />
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit" href='/home'>Masuk</Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}