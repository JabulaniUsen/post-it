'use client';

import React, { useState } from 'react';
import PaystackPayment from '../_components/PaystackPayment';
import { v4 as uuidv4 } from 'uuid';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [inputEmail, setInputEmail] = useState('');

  // Plan Options
  const plans = [
    {
      name: 'Free Plan',
      price: 0.00,
      description: 'Enjoy basic features at no cost.',
      features: [
        '3,000 credits per month',
        'Basic templates',
        'Community support',
      ],
      isFree: true,
    },
    {
      name: 'Premium Plan',
      price: 9.99, // In dollars (you can convert to kobo later)
      description: 'Unlock advanced features and priority support.',
      features: [
        '10,000 credits per month',
        'Premium templates',
        'Priority support',
        'Access to new features',
      ],
      isFree: false,
      planCode: 'PLN_7a2qbdc40nbg9dw'
    },
  ];

  // Handle plan selection and open payment popup
  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    setShowPopup(true);
  };

  // Handle popup close
  const handlePopupClose = () => {
    setShowPopup(false);
    setInputEmail(''); // Clear the email input field
  };

  // Handle form submit (trigger payment)
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowPopup(false);

    // Payment submission can be handled here or directly in the Paystack component
    // No need to do much here if Paystack payment handles success
  };

  // Payment success callback
  const handlePaymentSuccess = (reference: any) => {
    console.log('Payment successful, reference:', reference);

    // After successful payment, you can store the subscription details in your database
    // Example fetch request to your backend:
    fetch('/api/subscriptions', {
      method: 'POST',
      body: JSON.stringify({
        email: inputEmail,
        plan: selectedPlan?.name,
        amount: selectedPlan?.price,
        reference: reference.reference,
        status: 'active',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.ok) {
        alert('Subscription recorded successfully');
      }
    });

    // Optionally, you can redirect or show a success message
  };

  return (
    <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select the best plan that fits your needs. Enjoy basic features for free or upgrade for premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden bg-white flex flex-col justify-between border border-transparent hover:shadow-2xl hover:border-purple-500 transition-transform transform hover:-translate-y-2 rounded-xl shadow-md p-8 ${
                plan.isFree ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
              <p className="mb-6 text-gray-600">{plan.description}</p>
              <div>
                <p className="text-5xl font-bold text-purple-600">
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}<span className="text-lg">/mo</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="w-6 h-6 text-purple-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                {plan.isFree ? (
                  <button
                    disabled
                    className="w-full py-3 px-6 bg-gradient-to-r from-gray-300 to-gray-400 text-white font-bold rounded-lg cursor-not-allowed"
                  >
                    Current Plan
                  </button>
                ) : (
                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Select Plan
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-60">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-popup">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Confirm Your Plan</h3>
              <form onSubmit={handleSubmit}>
                <p className="mb-4"><span className='font-bold'>Plan:</span> {selectedPlan?.name}.</p>
                <p className="mb-4"><span className='font-bold'>Price:</span> ${selectedPlan?.price}</p>
                <p className="mb-4"><span className='font-bold'>Duration:</span> 1 month</p>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email:</label>
                  <input
                    type="email"
                    id="email"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    placeholder='Enter Email Address for verification'
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handlePopupClose}
                    className="py-2 px-4 bg-gray-300 text-white rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <PaystackPayment
                    amount={selectedPlan?.price}
                    email={inputEmail}
                    reference={uuidv4()} // Generate unique reference
                    onSuccess={handlePaymentSuccess}
                    planCode={selectedPlan.planCode}
                  />

                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
