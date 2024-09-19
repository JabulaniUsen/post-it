'use client';

import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import React, { useContext } from 'react';
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

  // Move useContext hooks inside the component body
  const { setTotalUsage } = useContext(TotalUsageContext);
  const { setUserSubscription } = useContext(UserSubscriptionContext);

  const handleSuccess = async (reference: any) => {
    console.log("Payment successful:", reference);

    // Update local state for UI
    setTotalUsage(100000); // Update total usage to 100,000
    setUserSubscription(true); // Mark user as subscribed

    // Call API to log payment and update credits
    try {
      const response = await fetch(`/api/update-credits?email=${email}&updateCredits=true`, {
        method: 'GET',
      });

      const data = await response.json();
      if (!response.ok || !data.message) {
        throw new Error(data.error || 'Failed to update credits in the database');
      }
      console.log('Credits updated successfully');
    } catch (error) {
      console.error('Error updating the database:', error);
    }

    onSuccess(reference); // Proceed with further actions
  };

  const handleClose = () => {
    console.log("Payment closed");
  };

  const componentProps = {
    email,
    amount, 
    publicKey,
    text: 'Proceed',
    reference,
    onSuccess: handleSuccess,
    onClose: handleClose,
    plan: planCode,
  };

  return <PaystackButton {...componentProps} />;
};

export default PaystackPayment;
