import {useState} from 'react'
import { Link } from 'react-router-dom'
import BrendDropDown from './pages/brends/BrendDropDown'
import MenDropdown from './pages/men/MenDropdown'
import KidsDropdown from './pages/kids/KidsDropdown'
import './Navbar.css'


const Navbar = () => {

    const[brendsDropdown,setBrendDropdown]=useState(false);
    const[isOpenMenDropdown,setIsOpenMenDropdown]=useState(false);
    const[isOpenKidsDropdown,setIsOpenKidsDropdown]=useState(false);
     
    const openBrendDropDown=()=>setBrendDropdown(!brendsDropdown);
    const closeBrendDropDown=()=>setBrendDropdown(false);
    const openMenDropdown=()=>setIsOpenMenDropdown(true);
    const closeMenDropdown=()=>setIsOpenMenDropdown(false);
    const openKidsDropdown=()=>setIsOpenKidsDropdown(true);
    const closeKidsDrodown=()=>setIsOpenKidsDropdown(false)


  return (
    <>
    <div className='navbar2'>
            <Link to='/Muskarci' 
            onClick={closeMenDropdown}
            onMouseOver={openMenDropdown}>
                MUSKARCI
            </Link>
            <Link to='/Deca'
             onClick={closeKidsDrodown}
             onMouseOver={openKidsDropdown}>
                 DECA
            </Link>
            <Link to='/Sport'>
                SPORT
            </Link>
            <Link  to='/Specijalne-cene' style={{color:'red'}}>
                SPECIJALNE CENE %
            </Link>
            <Link to='/Marke'  onMouseOver={openBrendDropDown}>
                MARKE
            </Link>
            <Link to='/Novo'>
                NOVO
            </Link>
    </div>
  {brendsDropdown && <BrendDropDown  closeBrendDropDown={closeBrendDropDown}/>}
  {isOpenMenDropdown && <MenDropdown closeMenDropDown={closeMenDropdown}/>}
  {isOpenKidsDropdown && <KidsDropdown closeKidsDropdown={closeKidsDrodown}/>}
</>
)
}

export default Navbar