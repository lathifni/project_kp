import React, { useState } from 'react'
import { ExpendableButton } from "./ExpendableButton";
import useOpenController from '../Hooks/useOpenController'
import { TablePengeluaran } from './TablePengeluaran';
import { useNavigate } from 'react-router-dom'

export const TableSubKegiatan = ({ item, index }) => {
  const [rek_PKSk4, setRek_PKSk4] = useState()
  const navigate = useNavigate()
  const { isOpen, toggle } = useOpenController(false);

  const addPengeluaran  = (item) => {
    setRek_PKSk4(item)
    navigate(`/tambahPengeluaran/${item}`)
  }

  const editPengeluaran = (item) => {
    navigate(`/editSubKegiatan/${item}`)
  }

  if (sessionStorage.getItem('role') === 'admin'){
    return (
      <tbody>
        <tr key={index}>
          <td></td>
          <td></td>
          <td></td>
          <td className="button-td">
            <ExpendableButton isOpen={isOpen} toggle={toggle} />
          </td>
          <td>{index + 1}</td>
          <td>{item.rek_PKSk4}</td>
          <td>{item.nama}</td>
          <td>
            <button onClick={() => addPengeluaran(item.id)}><i className="bi bi-plus" ></i></button> <br />
            <button onClick={() => editPengeluaran(item.id)}><i className="bi bi-pencil" ></i></button>
          </td>
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
  } else {
    return (
      <tbody>
        <tr key={index}>
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

}