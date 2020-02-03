import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/pay.png';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_BpsEdrG8tSZQno1Q2XAYVqGl003yJtCtoQ';

    const OnToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
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
    );
};
export default StripeCheckoutButton;