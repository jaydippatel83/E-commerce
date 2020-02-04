import React from 'react';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './card-dropdown.styles.scss';
import CartList from '../cart-list/cart-list.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';


const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown ">
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
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            Go to checkout
            </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropDown));