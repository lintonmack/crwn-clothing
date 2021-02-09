import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_T7CLeHY3c5URIXdgPD1n0WR3';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Payn Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton;
