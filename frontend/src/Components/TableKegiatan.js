import React from 'react'
import { ExpendableButton } from "./ExpendableButton";
import { TableSubKegiatan } from './TableSubKegiatan';
import useOpenController from '../Hooks/useOpenController'

export const TableKegiatan = ({kegiatan, index}) => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    
    <tr>
      <td className="button-td">
        <ExpendableButton isOpen={isOpen} toggle={toggle} />
      </td>
      <th>{index+1}</th>
      <th>{kegiatan.rek_PK4}</th>
      <th>{kegiatan.nama}</th>
      <th>{kegiatan.tahun}</th>
      <th>{kegiatan.id}</th>
    </tr>
   
    

    
    // {isOpen && kegiatan.sub_kegiatans.map((sub_kegiatan, index) => (
    //     <TableSubKegiatan kegiatan={sub_kegiatan} index={index}/>
    //     ))
    //   }

    // <tbody>
    //         <tr>
    //             <td className="button-td">
    //                 <ExpendableButton isOpen={isOpen} toggle={toggle} />
    //             </td>
    //             <th>{index+1}</th>
    //             <th>{kegiatan.rek_PK4}</th>
    //             <th>{kegiatan.nama}</th>
    //             <th>{kegiatan.tahun}</th>
    //             <th>{kegiatan.id}</th>
    //         </tr>
    //         {/* {isOpen && item.kegiatans.map((kegiatan, index) => (
    //           <TableKegiatan kegiatan={kegiatan} index={index}/>
    //           ))
    //         } */}
    //     </tbody>
  )
}
