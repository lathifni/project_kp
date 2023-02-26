import React, { useEffect, useState } from 'react'
import { ExpendableButton } from "./ExpendableButton";
import { TableKegiatan } from "./TableKegiatan";
import useOpenController from '../Hooks/useOpenController'

const API_HOST = "http://127.0.0.1:8000"
const LISTPROGRAM_API_URL = `${API_HOST}/users/listProgram`

export const TableProgram = ({item, index}) => {
    const { isOpen, toggle } = useOpenController(false);

    const [data, setdata] = useState([])

    const fetctListProgram =() => {
    fetch(`${LISTPROGRAM_API_URL}`)
      .then(res => res.json())
      .then(json => setdata(json))
    }

    useEffect(() => {
        fetctListProgram()
    }, [])

    return (
        <tbody>
            <tr>
                <td className="button-td">
                    <ExpendableButton isOpen={isOpen} toggle={toggle} />
                </td>
                <th>{index+1}</th>
                <th>{item.rek_p4}</th>
                <th>{item.nama}</th>
                <th>{item.tahun}</th>
                <th>{item.id}</th>
            </tr>
            {isOpen && item.kegiatans.map((kegiatan, index) => (
              <TableKegiatan kegiatan={kegiatan} index={index}/>
              ))
            }
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