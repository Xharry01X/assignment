import React from 'react'

const UpdateForm = ({setUpdate}) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className='close-btn'><AiOutlineClose onClick={()=>setShowCart(false)}/>
          <span className='text' onClick={()=>setUpdate(false)}>close</span></span>
        </div>
       

      
        
       </div>
         </div>
        
      </div>
    </div>
  )
}

export default UpdateForm
