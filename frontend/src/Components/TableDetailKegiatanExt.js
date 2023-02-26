import React from 'react'

export const TableDetailKegiatanExt = ({ detail, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{detail.rek_PKSk4}</td>
            <td>{detail.nama}</td>
        </tr>
    )
}
