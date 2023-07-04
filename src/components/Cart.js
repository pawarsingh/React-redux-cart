import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeitem, incQuantity,decQuantity,getTotal} from "../feactures/cartslice";
const Cart = () => {
    const {cart:data,totalprice,totalquantity} = useSelector((data) => data.allcart)
   
    const dispatch = useDispatch();
   
   useEffect(()=>{
    dispatch(getTotal()) 
   },[data])
  

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <div className="row mt-3">
                            {data.length!=0?data.map((data) =>
                                <div className="col-12 " key={data.id}>
                                    <div className="card shadow m-2 bg-dark d-flex justify-content-evenly flex-row align-items-center text-warning text-center p-3" >
                                        <img src={data.img} className="card-img-top" style={{ height: "100px", width:"100px",margin: "0px auto" }} alt="productImage" />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <h3 className="card-text">RS.{data.price}</h3>
                                            <button className='btn btn-danger text-white fw-bold' onClick={() => dispatch(removeitem(data.id))}>remove </button>
                                        </div>
                                        <div>
                                            <button className='btn btn-warning fw-bold p-2 text-center' onClick={() => dispatch(incQuantity(data.id))} style={{width:"50px"}}>+</button>
                                            <input type="text" className='mx-2 text-center p-1  fw-bold' value={data.quantity} style={{width:"50px"}} onChange={()=>null} />
                                            <button className='btn btn-warning  fw-bold p-2' onClick={() => dispatch(decQuantity(data.id))} style={{width:"50px"}}>-</button>
                                        </div>
                                    </div>
                                </div>
                            ):<h1 className='text-warning fw-bold fs-3'>NO DATA IN CART</h1>}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card mt-4 text-danger shadow fw-bolder bg-dark" >
                                <div className="card-body">
                                    <h3 className="card-title mt-2">Total Qantity : <b className='text-white'>{totalquantity}</b> </h3>
                                    <h3 className="card-title mt-2">Total Price :<b className='text-white'>{totalprice}</b> </h3>
                                    <button className='btn btn-warning btn-lg mt-2 fw-bold w-100'>checkout</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
