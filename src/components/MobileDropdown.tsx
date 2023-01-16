import React from 'react'
import {Offcanvas} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

type MobileDropdownProps={
    isOpenMobileDropdown:boolean
}
const MobileDropdown = ({isOpenMobileDropdown}:MobileDropdownProps) => {

    const{closeMobileDropdown}=useShoppingCart()
  return (
    <Offcanvas show={isOpenMobileDropdown}  onHide={closeMobileDropdown} placement='end' style={{width:'90%'}}>
    <Offcanvas.Header closeButton>
          <Offcanvas.Title>cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        drop
    </Offcanvas.Body>
</Offcanvas>
  )
}

export default MobileDropdown