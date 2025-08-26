import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is ChefExpress?",
      answer:
        "ChefExpress is a platform that connects home chefs with households, providing hygienic and wholesome meals tailored to your taste."
    },
    {
      question: "How do I book a chef?",
      answer:
        "You can book a chef through our website by selecting your preferred cuisine, date, and time."
    },
    {
      question: "Are the chefs verified?",
      answer:
        "Yes, all our chefs go through a thorough background check and verification process before joining our platform."
    },
    {
      question: "Can I customize my meals?",
      answer:
        "Absolutely! Our chefs allow customization based on your taste preferences, dietary restrictions, and health goals."
    },
    {
      question: "Which locations do you serve?",
      answer:
        "Currently, we are available in major cities across India and are expanding rapidly to cover more regions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800"
                >
                  {faq.question}
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-orange-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-orange-600" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`mt-4 text-gray-600 text-lg leading-relaxed transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
