import React, { useEffect, useState } from 'react'
import { ExpendableButton } from "./ExpendableButton";
import useOpenController from '../Hooks/useOpenController'
import { TablePengeluaran } from './TablePengeluaran';
import { TableCopy } from './TableCopy';
import { TableKegiatanCopy } from './TableKegiatanCopy';

export const TableSubKegiatan = ({ item, index }) => {

  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td className="button-td">
          <ExpendableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>{index + 1}</td>
        <td>{item.rek_PKSk4}</td>
        <td>{item.nama}</td>
      </tr>
      <tr>
        <td colSpan={7}>
          {isOpen && item.pengeluarans.map((pengeluaran, index) => (
            <TablePengeluaran pengeluaran={pengeluaran} index={index} />
          ))
          }
        </td>
        
      </tr>
    </tbody>
  )
}