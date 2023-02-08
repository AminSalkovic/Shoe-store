import { Link } from 'react-router-dom'
import {useState} from 'react'
import {Offcanvas} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import menData from './pages/men/categoryMen.json'
import './MobileDropdown.css'

type MobileDropdownProps={
    isOpenMobileDropdown:boolean
}
const MobileDropdown = ({isOpenMobileDropdown}:MobileDropdownProps) => {

    const[men,setMen]=useState(false);
    const[kids,setKids]=useState(false);


    const menFunction =()=>setMen(!men)
    const kidsFunction=()=>setKids(!kids)

     const{closeMobileDropdown}=useShoppingCart()
  return (
    <Offcanvas show={isOpenMobileDropdown}  onHide={closeMobileDropdown} placement='end' style={{width:'100%'}}>
    <Offcanvas.Header closeButton>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <div className='mobileDiv'>
        <Link to='/Muskarci'>
                <li  onClick={menFunction}> Muskarci {men ? <AiIcons.AiOutlineUp/> : <AiIcons.AiOutlineDown/>}</li>
                {men && <div style={{marginLeft:'30px'}}>
                           <Link to='/Muskarci'>
                             <li onClick={closeMobileDropdown}>Muskarci</li>
                           </Link>
                          {menData.map((item,index)=>{
                              return(
                                <Link to={item.imgPath}>
                                  <li onClick={closeMobileDropdown} key={index}>{item.category}</li>
                                </Link>
                              )
                          })}
                       </div>}
          </Link>
            <Link to='/Deca'>
                <li onClick={kidsFunction}>Deca {kids ?  <AiIcons.AiOutlineUp/> : <AiIcons.AiOutlineDown/>}</li>
                {kids && <div style={{marginLeft:'30px'}}>
                  <Link to='/deca/patike'>
                    <li onClick={closeMobileDropdown} >Deca patike</li>
                  </Link>
                  <Link to='/deca/duboke-patike'>
                      <li onClick={closeMobileDropdown} >Deca duboke patike</li>
                  </Link>
                  <Link to='/deca/cizme'>
                      <li onClick={closeMobileDropdown} >Deca cizme</li>
                  </Link>
                  <Link to='/deca/gumene-cizme'>
                      <li onClick={closeMobileDropdown} >Deca gumene cizme</li>
                  </Link>
                  <Link to='/deca/kucne-papuce'>
                      <li onClick={closeMobileDropdown} >Deca kucne papuce</li>
                  </Link>
                    </div>}
            </Link>
            <Link to='/Sport'>
                 <li onClick={closeMobileDropdown} >Sport</li>
            </Link>
            <Link  to='/Specijalne-cene' style={{color:'red'}}>
                  <li onClick={closeMobileDropdown} >Specijalne cene</li>
            </Link>
            <Link to='/Marke' >
               <li onClick={closeMobileDropdown} > Marke</li>
            </Link>
            <Link to='/Novo' >
                <li onClick={closeMobileDropdown} >Novo</li>
            </Link>
            <Link to='/'>
              <li onClick={closeMobileDropdown} >Home</li>
           </Link>
            <Link to='/kontakt' >
              <li  onClick={closeMobileDropdown}> <FaIcons.FaPhoneAlt/> Kontakt </li>
            </Link>
      </div>
    </Offcanvas.Body>
</Offcanvas>
  )
}

export default MobileDropdown