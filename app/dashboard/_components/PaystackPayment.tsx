'use client';

import React from 'react';
import { PaystackButton } from 'react-paystack';

interface PaystackProps {
  amount: number; // In kobo
  email: string;
  reference: string; // Unique reference for the transaction
  planCode?: any; // Paystack subscription plan code if you are handling Paystack plans
  onSuccess: (reference: any) => void;
}

const PaystackPayment: React.FC<PaystackProps> = ({ amount, email, reference, planCode, onSuccess }) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string;

  const handleSuccess = (reference: any) => {
    onSuccess(reference);
  };

  const handleClose = () => {
    console.log("Payment closed");
  };

  const componentProps = {
    email,
    amount, // Amount in kobo
    publicKey,
    text: 'Pay Now',
    reference,
    onSuccess: handleSuccess,
    onClose: handleClose,
    plan: planCode,
  };

  return <PaystackButton {...componentProps} />;
};

export default PaystackPayment;
