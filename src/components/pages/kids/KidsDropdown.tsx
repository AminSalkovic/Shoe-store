import { Link } from "react-router-dom"

type KidsDropdownProps={
    closeKidsDropdown:()=>void
}

const KidsDropdown = ({closeKidsDropdown}:KidsDropdownProps) => {
  return (
    <div  className='men-drop-down' onMouseLeave={closeKidsDropdown}>
    <ul>
        <Link to='/deca/patike'>
            <li>Deca patike</li>
        </Link>
        <Link to='/deca/duboke-patike'>
            <li>Deca duboke patike</li>
        </Link>
        <Link to='/deca/cizme'>
            <li>Deca cizme</li>
        </Link>
        <Link to='/deca/gumene-cizme'>
            <li>Deca gumene cizme</li>
        </Link>
        <Link to='/deca/kucne-papuce'>
            <li>Deca kucne papuce</li>
        </Link>
    </ul>
</div>
  )
}

export default KidsDropdown