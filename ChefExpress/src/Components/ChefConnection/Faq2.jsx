import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../Footer/Footer";

const FAQ2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ChefExpress से कैसे जुड़ें??",
      answer:
        "ChefExpress से जुड़ने के लिए ऊपर दिए गए ‘ChefKart से जुड़ें’ का बटन दबा कर फॉर्म भरें या हमें 9999999995 पर कॉल करें।"
    },
    {
      question: "ChefExpress से कौन जुड़ सकते हैं?",
      answer:
        "ChefExpress से हर वह कुक जुड़ सकते हैं जो खाना पकाने की प्रतिभा रखते हैं और 18 साल से ज़्यादा उम्र के हैं।"
    },
    {
      question: "ChefExpress से जुड़ने के लिए किन चीजों की आवश्यकता है?",
      answer:
        "ChefExpress से जुड़ने के लिए आपके पास आधार कार्ड, स्मार्ट फ़ोन, बैंक अकाउंट और पासपोर्ट फ़ोटो होना ज़रूरी है।"
     }
    //,
    // {
    //   question: "Can I customize my meals?",
    //   answer:
    //     "Absolutely! Our chefs allow customization based on your taste preferences, dietary restrictions, and health goals."
    // },
    // {
    //   question: "Which locations do you serve?",
    //   answer:
    //     "Currently, we are available in major cities across India and are expanding rapidly to cover more regions."
    // }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
          आपके प्रश्न
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
      <Footer/>
    </div>
  );
};

export default FAQ2;
