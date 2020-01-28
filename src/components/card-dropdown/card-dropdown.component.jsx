import React from 'react';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './card-dropdown.styles.scss';
import CartList from '../cart-list/cart-list.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';


const CartDropDown = ({ cartItems ,history}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartList key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <span className="empty-msg">Your Cart is Empty</span>
                    )
            }
        </div>
        <CustomButton onClick={()=>history.push('/checkout')}>Go to checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default  withRouter(connect(mapStateToProps)(CartDropDown));