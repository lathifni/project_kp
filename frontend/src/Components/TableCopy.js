import React, { useEffect, useState } from 'react'
import { TableProgramCopy } from './TableProgramCopy'
import Table from 'react-bootstrap/Table';

const API_HOST = "http://127.0.0.1:8000"
const LISTPROGRAM_API_URL = `${API_HOST}/users/readProgram`

export const TableCopy = () =>  {
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
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Table responsive striped>
          <thead>
            <tr>
              <th></th>
              <th colspan="4">No</th>
              <th>No Rek</th>
              <th>Nama</th>
            </tr>
          </thead>
            {data.map((item, index) => (
              <TableProgramCopy item={item} index={index}/>
              ))
            }
        </Table>
      </div>
    </div>

    // <div className="columns mt-5 is-centered">
    //   <div className="column is-half">
    //     <table className='table is-stripped is-fullwidth'>
    //       <thead>
    //         <tr>
    //           <th></th>
    //           <th colspan="3">No</th>
    //           <th>No Rek</th>
    //           <th>Nama</th>
    //         </tr>
    //       </thead>
    //         <tbody>
    //         <tr>
    //             <td className="button-td">
    //                 button
    //             </td>
    //             <th colspan="3">index+1</th>
    //             <th>item.rek_p4</th>
    //             <th>item.nama</th>
    //         </tr>
    //         <td colSpan={5}>
    //         <table>
    //           <thead>
    //             <tr>
    //               <th></th>
    //               <th>No</th>
    //               <th>No Rek</th>
    //               <th>Nama</th>
    //             </tr>
    //           </thead>
    //         </table>
    //         </td>
            
            
    //     </tbody>
    //     </table>
    //   </div>
    // </div>
    )
}

// export default Table