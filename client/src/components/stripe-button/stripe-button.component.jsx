import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HFIlABXn4Y4gDhWUqCU06TIbhXImuhBn1t43vQL5frxQOHqTOPMrm8ct3kfai7Khm68Ld3kUQBK3WzAB2sH0NL900nxq696Rl';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please be sure you use the provided credit card'
            );
        })
    }

    return (
        <StripeCheckout 
            label= 'Pay Now'
            name='Buddy Clothing Co.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;