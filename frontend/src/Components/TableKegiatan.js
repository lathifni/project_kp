import React from 'react'
import { ExpendableButton } from "./ExpendableButton";
import { TableSubKegiatan } from './TableSubKegiatan';
import useOpenController from '../Hooks/useOpenController'
import { useNavigate } from 'react-router-dom'

export const TableKegiatan = ({kegiatan, index}) => {
  const { isOpen, toggle } = useOpenController(false);
  const navigate = useNavigate()

  const addSubKegiatan  = (item) => {
    navigate(`/tambahSubKegiatan/${item}`)
  }

  const editKegiatan = (item) => {
    navigate(`/editKegiatan/${item}`)
  }

  if (sessionStorage.getItem('role') === 'admin'){
    return (
      <table>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td><ExpendableButton isOpen={isOpen} toggle={toggle} /></td>
            <td colSpan="2">{index + 1}</td>
            <td>{kegiatan.rek_PK4}</td>
            <td>{kegiatan.nama}</td>
            <td>
              <button onClick={() => addSubKegiatan(kegiatan.id)}><i className="bi bi-plus" ></i></button> <br />
              <button onClick={() => editKegiatan(kegiatan.id)}><i className="bi bi-pencil" ></i></button>
            </td>
          </tr>
        </thead>
        {isOpen && kegiatan.sub_kegiatans.map((item, index) => (
          <TableSubKegiatan item={item} index={index} />
        ))
        }
      </table>
    )
  } else {
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
    )
  }
}