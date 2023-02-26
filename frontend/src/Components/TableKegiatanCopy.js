import React from 'react'
import { ExpendableButton } from "./ExpendableButton";
import { TableSubKegiatan } from './TableSubKegiatan';
import useOpenController from '../Hooks/useOpenController'

export const TableKegiatanCopy = ({kegiatan, index, no}) => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td><ExpendableButton isOpen={isOpen} toggle={toggle} /></td>
          <td colspan="2">{index + 1}</td>
          <td>{kegiatan.rek_PK4}</td>
          <td>{kegiatan.nama}</td>
        </tr>
      </thead>
      {isOpen && kegiatan.sub_kegiatans.map((item, index) => (
        <TableSubKegiatan item={item} index={index} />
      ))
      }
    </table>


    
    
    // <tr>
    //   <td className="button-td">
    //     <ExpendableButton isOpen={isOpen} toggle={toggle} />
    //   </td>
    //   <td></td>
    //   <td></td>
    //   <th colSpan={1}>{index+1}</th>
    //   <th>{kegiatan.rek_PK4}</th>
    //   <th>{kegiatan.nama}</th>
    // </tr>
   
    // {isOpen && kegiatan.sub_kegiatans.map((sub_kegiatan, index) => (
    //     <TableSubKegiatan kegiatan={sub_kegiatan} index={index}/>
    //     ))
    //   }
  )
}
