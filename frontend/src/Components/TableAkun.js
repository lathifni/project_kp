import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const API_HOST = "http://127.0.0.1:8000"
const LISTPROGRAM_API_URL = `${API_HOST}/users/listAkun`

export const TableAkun = () => {
    const [data, setdata] = useState([])
    const fetctListProgram = () => {
        fetch(`${LISTPROGRAM_API_URL}`)
            .then(res => res.json())
            .then(json => setdata(json))
    }
    useEffect(() => {
        fetctListProgram()
    }, [])

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>NIP</th>
                            <th>Role</th>
                            <th>Reset</th>
                        </tr>
                    </thead>
                    {data.map((item, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.staff.nama}</td>
                                <td>{item.NIP}</td>
                                <td>{item.role}</td>
                                <td>Reset</td>
                            </tr>
                        </tbody>
                    ))
                    }
                </Table>
            </div>
        </div>
    )
}