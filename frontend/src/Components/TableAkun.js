import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const API_HOST = "http://127.0.0.1:8000"
const LISTPROGRAM_API_URL = `${API_HOST}/list/semuaAkun`

export const TableAkun = () => {
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

    const resetAkun = (item) => {
        const response = window.confirm(`Reset Password ${item}?`);
        if (response === true) {
            const NIP = item
            console.log(NIP)
            axios.post(`http://127.0.0.1:8000/auth/reset`, {
                NIP
            })
        }
    }

    const addAkun = () => {
        navigate('/addAkun')
    }

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
                        <tbody key={index}>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.staff.nama}</td>
                                <td>{item.NIP}</td>
                                <td>{item.role}</td>
                                <td> <button onClick={() => resetAkun(item.NIP)}><i className="bi bi-arrow-clockwise"></i></button></td>
                            </tr>
                        </tbody>
                    ))
                    }
                </Table>
                <Button className="mr-3" variant="primary" type="button" onClick={addAkun}>Tambah Akun</Button>
            </div>
        </div>
    )
}