import React from 'react'
import { Navigation } from '../Components/Navigation'
import { TambahPengeluaran } from '../Components/TambahPengeluaran'

export const AddPengeluaran = () => {
    // return (
    //     <div>
    //         <NavigationAdmin/>
    //         <TambahPengeluaran/>
    //     </div>
    // )
    return (
        <div>
          <Navigation />
          <TambahPengeluaran/>
        </div>
      )
}