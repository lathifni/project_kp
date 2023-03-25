import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TableNota } from './TableNota';

export const JudulNota = () => {
    const [nota, setNota] = useState([])

    useEffect(() => {
        const semuaNota = async () => {
            const res = await axios.get('http://127.0.0.1:8000/list/semuaNota')
            setNota(res.data)
        }
        semuaNota()
        console.log(nota)
    }, [])

    return (
        <div>
            <h1 className="fs-1 text-center">DAFTAR SEMUA NOTA</h1>
            {nota.map((item, index) => (
                <TableNota key={index} item={item} index={index} />
            ))}
        </div>
    )
}
