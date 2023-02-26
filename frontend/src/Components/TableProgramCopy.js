import React, { useEffect, useState } from 'react'
import { ExpendableButton } from "./ExpendableButton";
import { TableKegiatanCopy } from "./TableKegiatanCopy";
import useOpenController from '../Hooks/useOpenController'

export const TableProgramCopy = ({item, index}) => {
    const { isOpen, toggle } = useOpenController(false);
    return (
        <tbody>
            <tr>
                <td className="button-td">
                    <ExpendableButton isOpen={isOpen} toggle={toggle} />
                </td>
                <td colSpan={4}>{index + 1}</td>
                <td>{item.rek_P4}</td>
                <td>{item.nama}</td>
            </tr>
            <tr >
                <td colSpan={7}>
                    {isOpen && item.kegiatans.map((kegiatan, index) => (
                        <TableKegiatanCopy kegiatan={kegiatan} index={index} />
                    ))
                    }
                </td>
            </tr>
        </tbody>


        // <tbody>
        //     <tr>
        //         <td colspan="6">
        //             <table className='table is-stripped is-fullwidth'>
        //                 <thead>
        //                     <tr>
        //                         <th></th>
        //                         <th>{index+1}</th>
        //                         <th>{item.rek_p4}</th>
        //                         <th>{item.nama}</th>
        //                         <th>{item.tahun}</th>
        //                         <th>{item.id}</th>
        //                     </tr>
        //                 </thead>

        //             </table>
        //         </td>
        //     </tr>
        // </tbody>
    )
}