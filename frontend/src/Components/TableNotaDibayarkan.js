import React from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export const TableNotaDibayarkan = ({ item }) => {

    const accNota = (item) => {
        const response = window.confirm("Nota Telah Dibayarkan?");
        if (response === true) {
            axios.get(`http://127.0.0.1:8000/edit/editNotaDibayarkan/${item}`)
            window.location.reload()
        }
    }

    return (
        <div>
            <br />
            <h1 className='text-center'>Nama: {item.nama}</h1>
            <h1 className='text-center'>No Rek: {item.rek_PKSk4}</h1><br />
            <div className="columns is-centered">
                <div>
                    <Table responsive striped >
                        <thead>
                            <tr>
                                <th className='text-center'>No</th>
                                <th className='text-center'>Rekening</th>
                                <th className='text-center'>Nama</th>
                                <th className='text-center'>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.pengeluarans.map((p, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{p.rek_P5}</td>
                                    <td>{p.nama}</td>
                                    <tr>
                                        <th className='text-center'>Bulan</th>
                                        <th>Nama Nota</th>
                                        <th>Total</th>
                                        <th>NIP</th>
                                        <th>Aksi</th>
                                    </tr>
                                    {p.notas.map((detail) => (
                                        <tr>
                                            <td>{detail.bulan}</td>
                                            <td>{detail.nama}</td>
                                            <td>Rp{detail.total}</td>
                                            <td>{detail.NIP}</td>
                                            <td>
                                                <button onClick={() => accNota(detail.id)}><i class="bi bi-cash-coin"></i></button><br />
                                            </td>
                                            {/* <td>Rp{detail.triwulan4}</td> */}
                                        </tr>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                        <hr />
                    </Table>
                </div>
            </div>
        </div>
    )
}
