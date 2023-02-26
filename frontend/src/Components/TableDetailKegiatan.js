import React from 'react'
import Table from 'react-bootstrap/Table';

export const TableDetailKegiatan = ({ item, index }) => {
  return (
      <div>
        <br />
          <h1 className='text-center'>Nama: {item.nama}</h1>
          <h1 className='text-center'>No Rek: {item.rek_PK4}</h1><br />
          <div className="columns is-centered">
              <div>
                  <Table responsive striped >
                      <thead>
                          <tr>
                              <th className='text-center'>No</th>
                              <th className='text-center'>Rekening</th>
                              <th className='text-center'>Nama</th>
                              <th className='text-center'>Detail</th>
                          </tr>
                      </thead>
                      <tbody>
                        {item.sub_kegiatans.map(( detail, index ) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{detail.rek_PKSk4}</td>
                                <td>{detail.nama}</td>
                                <tr>
                                    <th className='text-center'>Pengeluaran</th>
                                    <th>Triwulan 1</th>
                                    <th>Triwulan 2</th>
                                    <th>Triwulan 3</th>
                                    <th>Triwulan 4</th>
                                </tr>
                                {detail.pengeluarans.map(( detailPengeluaran ) => (
                                    <tr>
                                        <td>{detailPengeluaran.nama}</td>
                                        <td>Rp{detailPengeluaran.triwulan1}</td>
                                        <td>Rp{detailPengeluaran.triwulan2}</td>
                                        <td>Rp{detailPengeluaran.triwulan3}</td>
                                        <td>Rp{detailPengeluaran.triwulan4}</td>
                                    </tr>
                                ))}
                            </tr>
                        ))}
                      </tbody>
                      <hr />
                  </Table>
              </div>
          </div>
      </div>
  )
}
