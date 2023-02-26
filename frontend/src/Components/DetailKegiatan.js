import React, { useEffect, useState } from 'react'
import { TableDetailKegiatan } from './TableDetailKegiatan';

const API_HOST = "http://127.0.0.1:8000"
const LISTPROGRAM_API_URL = `${API_HOST}/users/listKegiatan`

export const DetailKegiatan = () => {
    const [data, setdata] = useState([])

    const fetctListProgram =() => {
    fetch(`${LISTPROGRAM_API_URL}`)
      .then(res => res.json())
      .then(json => setdata(json))
    }

    useEffect(() => {
        fetctListProgram()
    }, [])
  return (
    <div>
      <h1 className="fs-1 text-center">SEMUA KEGIATAN</h1>
      {data.map((item, index) => (
        <TableDetailKegiatan item={ item } index={ index } />
      ))}
    </div>
  )
}
