import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/pay.png';
import { ToastContainer, toast } from 'react-toastify';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_BpsEdrG8tSZQno1Q2XAYVqGl003yJtCtoQ';

    const OnToken = token => {
        console.log(token);
        toast.success("Payment Successfully....!", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <div style={{width:'30%',margin:'10px auto'}}>
            <ToastContainer />
            <StripeCheckout
                style={{width:'100%'}}
                label='Pay Now'
                name='CC-Fashion'
                billingAddress
                shippingAddress
                image={logo}
                description={`Your Total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={OnToken}
                stripeKey={publishablekey}
            />
        </div>
    );
};
export default StripeCheckoutButton;