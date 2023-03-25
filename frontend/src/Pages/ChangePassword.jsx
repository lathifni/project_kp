import React from 'react'
import { Navigation } from '../Components/Navigation'
import { ChangePass } from '../Components/ChangePass'

export const ChangePassword = () => {
  // if (sessionStorage.getItem('role') === 'admin') {
  //   return (
  //     <div>
  //       <NavigationAdmin />
  //       <ChangePass />
  //     </div>
  //   )
  // } else if (sessionStorage.getItem('role') === 'bendahara') {
  //   return (
  //     <div>
  //       <NavigationBend />
  //       <ChangePass />
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <Navigation />
  //       <ChangePass />
  //     </div>
  //   )
  // }
  return (
    <div>
      <Navigation />
      <ChangePass />
    </div>
  )
}
