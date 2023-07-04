import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotal } from '../feactures/cartslice'

const Nav = () => {
    const {cart,totalquantity} = useSelector((state)=> state.allcart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTotal);
    },[cart])
   
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-warning fw-bold" to="/">ReactCart</Link>
    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-warning fw-bold" aria-current="page" to="/">ALL-PRODUCT</Link>
        </li>
       
      
        
      </ul>
      <div className='d-flex'>
      
          <Link className="nav-link " to="/cart">
            <button className='btn btn-warning text-dark fw-bold'>
               CART
            </button>
            <button  className='btn ms-1 btn-warning text-dark fw-bold'>
             {totalquantity}
            </button>
            
            </Link>
        
      </div>
       
    </div>
    
  </div>
</nav>
    </>
  )
}

export default Nav
