import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "सुनीता शर्मा",
    text: "ChefExpress से जुड़ने के बाद मेरी आय में स्थिरता आई है। अब मैं आत्मनिर्भर हूँ और अपने परिवार की जिम्मेदारी अच्छे से निभा पा रही हूँ।",
    img: "https://via.placeholder.com/100", // replace with real image
    rating: 5,
  },
  {
    name: "राकेश यादव",
    text: "मुझे हमेशा खाना बनाने का शौक था, लेकिन इसे करियर बना पाऊँगा ऐसा कभी नहीं सोचा था। ChefExpress ने मुझे यह अवसर दिया।",
    img: "https://via.placeholder.com/100",
    rating: 5,
  },
  {
    name: "अनिता वर्मा",
    text: "इस प्लेटफ़ॉर्म ने मुझे सिर्फ़ काम ही नहीं, बल्कि आत्मविश्वास भी दिया है। अब लोग मेरे बनाए खाने की तारीफ़ करते हैं और यही सबसे बड़ी खुशी है।",
    img: "https://via.placeholder.com/100",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          हमारे साथियों का अनुभव
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1E3932] text-white rounded-2xl p-6 relative flex flex-col items-center shadow-lg"
            >
              {/* Avatar */}
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-white absolute -top-10"
              />

              <div className="mt-12 text-center">
                {/* Stars */}
                <div className="flex justify-center mb-3 text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg italic mb-4">"{testimonial.text}"</p>

                {/* Divider */}
                <div className="w-12 h-[2px] bg-gray-300 mx-auto my-3"></div>

                {/* Name */}
                <h4 className="text-md font-semibold">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
