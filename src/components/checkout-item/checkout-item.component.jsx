import React from 'react';
import { connect } from 'react-redux';
import { ClearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
 
    const remove = () => {
        confirmAlert({
            title: 'Remove Items',
            message: 'Are you sure to  remove this item...!  ?',
            buttons: [
                {
                    className: 'btn btn-primary',
                    label: 'Yes',
                    onClick: () => clearItem(cartItem)
                },
                {
                    className: 'btn btn-danger',
                    label: 'No',
                    onClick: () => clearItem(window.close)
                }
            ]
        });
    };

    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img alt='item' src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => remove()}>&#10060;</div> 
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem);