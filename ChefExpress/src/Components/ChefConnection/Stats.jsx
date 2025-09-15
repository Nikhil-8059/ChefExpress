import React from "react";
import { FaUtensils, FaUserCheck, FaHome } from "react-icons/fa";

export default function Stats() { 
  const stats = [
    {
      id: 1,
      icon: <FaUtensils className="text-gray-300 text-6xl" />,
      number: "3M+",
      text: "Meals cooked with love",
    },
    {
      id: 2,
      icon: <FaUserCheck className="text-gray-300 text-6xl" />,
      number: "4500+",
      text: "Verified & Trained Cooks",
    },
    {
      id: 3,
      icon: <FaHome className="text-gray-300 text-6xl" />,
      number: "10K+",
      text: "Households served",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col items-center space-y-4">
          {stat.icon}
          <h2 className="text-3xl font-bold">{stat.number}</h2>
          <p className="text-gray-600">{stat.text}</p>
        </div>
      ))}
    </div>
  );
}
