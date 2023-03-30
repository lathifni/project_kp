import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TableNotaDibayarkan } from './TableNotaDibayarkan';

export const JudulNotaDibayarkan = () => {
    const [nota, setNota] = useState([])

    useEffect(() => {
        const semuaNota = async () => {
            const res = await axios.get('http://127.0.0.1:8000/list/notaDibayarkan')
            setNota(res.data)
        }
        semuaNota()
        console.log(nota)
        // eslint-disable-next-line
      }, [])

  return (
    <div>
        <h1 className="fs-1 text-center">DAFTAR NOTA YANG AKAN DIBAYAR </h1>
        {nota.map((item, index) => (
                <TableNotaDibayarkan key={index} item={item} index={index} />
            ))}
    </div>
  )
}
