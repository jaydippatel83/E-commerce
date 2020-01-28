import React from 'react';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './card-dropdown.styles.scss';
import CartList from '../cart-list/cart-list.component';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';


const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.map( cartItem => (
                    <CartList key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems:  selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropDown);