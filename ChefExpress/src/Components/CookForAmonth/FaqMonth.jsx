import React, { useState } from "react";

const FaqMonth = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is Cook for Month?",
      answer:
        "‘Cook for a Month’ offers a seamless 30-day service where a trusted and verified cook prepares meals according to your preferences in the comfort of your home.",
    },
    {
      question: "Can I try the cook before choosing the 'Cook for a Month' service?",
      answer:
        "Yes, you can book a paid trial to experience the service. If satisfied, the same cook will be assigned for the entire 30-day period.",
    },
    {
      question: "How is a cook assigned to me?",
      answer:
        "A cook will be assigned based on your preferences and specifications at the time of booking the trial.",
    },
    {
      question: "How can I find out if this service is available in my area?",
      answer:
        "Add your address to check service availability. The home page will then display a list of services offered in your location.",
    },
    {
      question: "When do I have to make the payment to start my Cook For a Month service?",
      answer:
        "Once the trial session is over, you have to pay the subscription fee to start your daily service with the selected cook.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-orange-500 font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left text-lg sm:text-xl font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-gray-700 text-base sm:text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqMonth;
