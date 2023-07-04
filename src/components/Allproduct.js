import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { additem , getTotal} from '../feactures/cartslice'
const Allproduct = () => {
    const {items:data,cart} = useSelector((state)=>state.allcart)
    const dispatch = useDispatch();
    useEffect(()=>{
           dispatch(getTotal())
    },[cart])
   
  return (
    <>
    <div className="container">
        <h2 className='text-center text-info fw-bold text-uppercase'>our latest mobiles </h2>
      <div className="row mt-3">
             {data.map((data)=>
         <div className="col-4 " key={data.id}>
                      <div className="card hello shadow m-2 bg-dark text-info text-center p-3" style={{width: "18rem"}}>
                      <img src={data.img} className="card-img-top w-75 " style={{height:"200px",margin:"0px auto"}}  alt="productImage"/>
                      <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <h3 className="card-text">RS.{data.price}</h3>
                      <div className='d-flex justify-content-evenly'>
                      <button className='btn btn-warning text-dark fw-bold' onClick={()=>dispatch(additem(data))}>Add To Cart</button>
                      </div>
                      </div>
        
               </div>
         </div>
             )}
      </div>
      </div>
    </>
  )
}

export default Allproduct
