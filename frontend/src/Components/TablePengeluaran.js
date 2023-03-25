import React from 'react'
import { useNavigate } from 'react-router-dom'

export const TablePengeluaran = ({ pengeluaran, index }) => {
    const navigate = useNavigate()

    const editPengeluaran = (item) => {
        navigate(`/editPengeluaran/${item}`)
    }

    if (sessionStorage.getItem('role') === 'admin'){
        return (
            <table>
                <thead>
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{index + 1}</td>
                        <td>{pengeluaran.rek_P5}</td>
                        <td>{pengeluaran.nama}</td>
                        <td> <button onClick={() => editPengeluaran(pengeluaran.id)}><i className="bi bi-pencil" ></i></button> </td>
                    </tr>
                </thead>
            </table>
        )
    } else {
        return (
            <table>
                <thead>
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{index + 1}</td>
                        <td>{pengeluaran.rek_P5}</td>
                        <td>{pengeluaran.nama}</td>
                    </tr>
                </thead>
            </table>
            // <tr>
            //     <th>{index + 1}</th>
            //     <th>{pengeluaran.rek_P5}</th>
            //     <th>{pengeluaran.nama}</th>
            // </tr>
        )
    }
}