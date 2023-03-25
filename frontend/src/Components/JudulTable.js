import React, { useEffect, useState } from 'react'
import { TableProgram } from './TableProgram'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const API_HOST = "http://127.0.0.1:8000"
const LISTPROGRAM_API_URL = `${API_HOST}/list/semuaProgram`

export const JudulTable = () => {
  const [data, setdata] = useState([])
  const navigate = useNavigate()

  const fetctListProgram = () => {
    fetch(`${LISTPROGRAM_API_URL}`)
      .then(res => res.json())
      .then(json => setdata(json))
  }

  useEffect(() => {
    fetctListProgram()
  }, [])

  const addProgram = () => {
    navigate('/tambahProgram')
  }

  if (sessionStorage.getItem('role') === 'admin') {
    return (
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <Table responsive striped>
            <thead>
              <tr>
                <th></th>
                <th colSpan="4">No</th>
                <th>No Rek</th>
                <th>Nama</th>
                <th>Action</th>
              </tr>
            </thead>
            {data.map((item, index) => (
              <TableProgram key={index} item={item} index={index} />
            ))
            }
          </Table>
          <Button className="mr-3" variant="primary" type="button" onClick={addProgram}>Tambah Program</Button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <Table responsive striped>
            <thead>
              <tr>
                <th></th>
                <th colSpan="4">No</th>
                <th>No Rek</th>
                <th>Nama</th>
              </tr>
            </thead>
            {data.map((item, index) => (
              <TableProgram key={index} item={item} index={index} />
            ))
            }
          </Table>
        </div>
      </div>
    )
  }
}

// export default Table