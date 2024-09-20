'use client';

import { useRouter } from 'next/navigation'; // Updated import

const Pricing = () => {
  const router = useRouter(); // Use the updated Next.js router

  // Plan Options
  const plans = [
    {
      name: 'Free',
      price: 0.00,
      description: 'Enjoy basic features at no cost.',
      features: [
        '10,000 credits',
        'Basic templates',
        'Community support',
      ],
      isFree: true,
    },
    {
      name: 'Premium',
      price: 9.99, // In dollars (you can convert to kobo later)
      description: 'Unlock advanced features and priority support.',
      features: [
        '100,000 credits per month',
        'Premium templates',
        'Priority support',
        'Access to new features',
      ],
      isFree: false,
      planCode: 'PLN_7a2qbdc40nbg9dw'
    },
  ];

  // Navigate to signup page for Free plan
  const handleFreePlan = () => {
    router.push('/dashboard');
  };

  // Navigate to billing page for Premium plan
  const handlePremiumPlan = () => {
    router.push('/dashboard/billing');
  };

  return (
    <section id='pricing' className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
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
              className={` bg-white flex flex-col justify-between border border-transparent hover:shadow-2xl hover:border-purple-500 transition-transform lg:hover:-translate-y-2 rounded-xl shadow-md p-8 ${
                plan.isFree ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name} Plan</h3>
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
                    onClick={handleFreePlan} // Route to sign-up page for the free plan
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Sign Up for Free
                  </button>
                ) : (
                  <button
                    onClick={handlePremiumPlan} // Route to /dashboard/billing for the Premium plan
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Select Premium Plan
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
