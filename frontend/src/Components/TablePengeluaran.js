import React from 'react'
import { ExpendableButton } from "./ExpendableButton";
import useOpenController from '../Hooks/useOpenController'

export const TablePengeluaran = ({ pengeluaran, index }) => {
    const { isOpen, toggle } = useOpenController(false);
    return (
        <table>
            <thead>
                <tr>
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