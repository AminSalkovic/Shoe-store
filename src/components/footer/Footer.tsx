import './Footer.css'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import categoryItems from '../pages/men/categoryMen.json'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer1">
            
        </div>
        <div className='footer2'>
          <div>
             <h1>O NAMA</h1>
             <ul>
                <Link to='/podaci/o/kompaniji'>
                  <li>Podaci o kompaniji</li>
                </Link>
                <Link to='/kontakt'>
                  <li>Kontakt</li>
                </Link>
             </ul>
          </div>
          <div>
            <h1>POMOĆ PRI KUPOVINI</h1>
             <ul>
                <Link to='/nacini/placanja'>
                   <li>Načini plaćanja</li>
                </Link>
                <Link to='/dostava'>
                  <li>Dostava</li>
                 </Link>
                 <Link to='/reklamacija'>
                    <li>Reklamacija</li>
                 </Link>
             </ul>
            </div>
          <div>
            <h1>MUŠKARCI</h1>
            <ul>
            {categoryItems.map((item,id)=>{
                return(
                    <Link key={id} to={item.imgPath}>
                     <li  key={id}>{item.category}</li>
                    </Link>
                  )
                })}
                </ul>
          </div>
          <div>
            <h1>DECA</h1>
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
        </div>
        <div className="footer3">

        </div>
    </div>
  )
}

export default Footer