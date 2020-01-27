import React from 'react';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './card-dropdown.styles.scss';

const CartDropDown =()=>(
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Go to checkout</CustomButton>
    </div>
);
export default CartDropDown;