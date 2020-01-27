import React from 'react';
import './cart-list.styles.scss';


const CartList = ({item:{imageUrl,price,name,quantity}})=>(
    <div className='cart-list'>
        <img src={imageUrl} alt='item'/>
        <div className="list-details">
            <span className="name">{name}</span>
            <span className=" price">{quantity}  X  ${price}</span>
        </div>
    </div>
);

export default CartList;