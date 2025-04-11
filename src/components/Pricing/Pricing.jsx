import React from 'react';
import { BsArrowRightSquareFill, BsArrowRightSquare } from "react-icons/bs";

const Pricing = () => {
  const plans = [
    {
      name: "Free Books",
      price: "$0",
      description: "Basic package with limited features",
      features: [
        { text: "Limited access", included: true },
        { text: "Daily 10 Downloads", included: true },
        { text: "No download restrictions", included: false },
        { text: "Download for offline reading", included: false },
        { text: "Ad-free experience", included: false },
        { text: "Exclusive access to new releases", included: false },
        { text: "Personalized recommendations", included: false },
        { text: "Priority customer support", included: false }
      ],
      badge: "BEST VALUE",
      badgeColor: "bg-red-700",
      action: "Sign Up Free"
    },
    {
      name: "Pro Books",
      price: "$29/mo",
      description: "Intermediate package for avid readers",
      features: [
        { text: "Limited access", included: true },
        { text: "Daily 10 Downloads", included: true },
        { text: "No download restrictions", included: true },
        { text: "Download for offline reading", included: true },
        { text: "Ad-free experience", included: true },
        { text: "Exclusive access to new releases", included: false },
        { text: "Personalized recommendations", included: false },
        { text: "Priority customer support", included: false }
      ],
      badge: "ESSENTIAL PLAN",
      badgeColor: "bg-green-700",
      action: "Start a 14 Day Trial"
    },
    {
      name: "Plus Books",
      price: "$99/yr",
      description: "Premium package for serious book lovers",
      features: [
        { text: "Limited access", included: true },
        { text: "Daily 10 Downloads", included: true },
        { text: "No download restrictions", included: true },
        { text: "Download for offline reading", included: true },
        { text: "Ad-free experience", included: true },
        { text: "Exclusive access to new releases", included: true },
        { text: "Personalized recommendations", included: true },
        { text: "Priority customer support", included: true }
      ],
      badge: "ULTIMATE PLAN",
      badgeColor: "bg-blue-700",
      action: "Start a 14 Day Trial"
    },
  ];

  return (
    <section className='w-11/12 mx-auto my-10'>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Choose the right plan for you</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl transition duration-300">
            <div>
              <div className={`${plan.badgeColor} px-4 py-1 text-sm font-bold text-white rounded-full w-fit mb-4`}>{plan.badge}</div>
              <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">{plan.name}</h3>
              <p className='text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2'>{plan.price}</p>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>{plan.description}</p>
              <hr className='my-4' />
              <p className='text-lg font-semibold mb-2 text-gray-800 dark:text-white'>Highlighted Features</p>
              <ul className='space-y-2 text-sm'>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    {feature.included ? <BsArrowRightSquareFill className='text-green-600' /> : <BsArrowRightSquare className='text-gray-400' />}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition duration-300">
                {plan.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;