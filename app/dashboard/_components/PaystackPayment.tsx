'use client'; // Make sure this is a Client Component

import React, { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';

interface PaystackProps {
  amount: number; // Amount in dollars
  email: string;
}

const PaystackPayment: React.FC<PaystackProps> = ({ amount, email }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null; // Render nothing on the server side
  }

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string;
  const amountInKobo = amount * 1660; // Convert dollars to kobo (cents)

  const handleSuccess = (reference: any) => {
    console.log("Payment successful", reference);
    window.location.reload()
  };

  const handleClose = () => {
    console.log("Payment closed");
  };

  const componentProps = {
    email,
    amount: amountInKobo,
    publicKey,
    text: 'Pay Now',
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  return <PaystackButton {...componentProps} />;
};

export default PaystackPayment;
