import React, { useEffect, useState } from 'react'

const API_HOST = "http://127.0.0.1:8000"
const LISTPROGRAM_API_URL = `${API_HOST}/list/semuaProgram`

const ListProgram = () => {
  const [data, setdata] = useState([])

  const fetctListProgram =() => {
    fetch(`${LISTPROGRAM_API_URL}`)
      .then(res => res.json())
      .then(json => setdata(json))
  }

  useEffect(() => {
    fetctListProgram()
  }, [])

  // useEffect(() => {
  //   const fetctListProgram = async () => {
  //     const res = await fetch(`${LISTPROGRAM_API_URL}`)
  //     const data = await res.json()
  //     console.log(data)
  //     setdata(data)
  //   }
  //   fetctListProgram()
  // }, [])

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <table className='table is-stripped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>No Rek</th>
              <th>Nama</th>
              <th>tahun</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {
              // data.map((item, index) => (
              //   <tr key = {item.id}>
              //     <td>{index+1}</td>
              //     <td>{item.rek_p4}</td>
              //     <td>{item.nama}</td>
              //     <td>{item.tahun}</td>
              //     <td>{item.kegiatans({})}</td>
              //   </tr>
              // ))
              data.map((item, index) => (
                <tr key = {item.id}>
                  <td>{index+1}</td>
                  <td>{item.rek_p4}</td>
                  <td>{item.nama}</td>
                  <td>{item.tahun}</td>
                  <td>{item.tahun}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProgram