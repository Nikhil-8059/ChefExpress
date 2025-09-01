
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          हमारे साथियों का अनुभव
        </h2>

        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div className="px-4">
            <div className="bg-[#1E3932] text-white rounded-2xl p-6 relative flex flex-col items-center shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1291246487/photo/portrait-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=9kww0BGomB0ZtHmxt7l3mSqXqerm4BpqqL145cLm3eI="
                alt="सुनीता शर्मा"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto border-4 border-white"
              />
              <div className="mt-12 text-center">
                <div className="flex justify-center mb-3 text-yellow-400">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-lg italic mb-4">
                  "ChefExpress से जुड़ने के बाद मेरी आय में स्थिरता आई है। अब मैं आत्मनिर्भर हूँ और अपने परिवार की जिम्मेदारी अच्छे से निभा पा रही हूँ।"
                </p>
                <div className="w-12 h-[2px] bg-gray-300 mx-auto my-3"></div>
                <h4 className="text-md font-semibold">सुनीता शर्मा</h4>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="px-4">
            <div className="bg-[#1E3932] text-white rounded-2xl p-6 relative flex flex-col items-center shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSSGD8QV-K-qwsXjPxVRt6dxPTMeCnyJ5xQ&s"
                alt="राकेश यादव"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto border-4 border-white"
              />
              <div className="mt-12 text-center">
                <div className="flex justify-center mb-3 text-yellow-400">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-lg italic mb-4">
                  "मुझे हमेशा खाना बनाने का शौक था, लेकिन इसे करियर बना पाऊँगा ऐसा कभी नहीं सोचा था। ChefExpress ने मुझे यह अवसर दिया।"
                </p>
                <div className="w-12 h-[2px] bg-gray-300 mx-auto my-3"></div>
                <h4 className="text-md font-semibold">राकेश यादव</h4>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="px-4">
            <div className="bg-[#1E3932] text-white rounded-2xl p-6 relative flex flex-col items-center shadow-lg">
              <img
                src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/24160041/Inside-Image-Vertical-30.jpeg"
                alt="अनिता वर्मा"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto border-4 border-white"
              />
              <div className="mt-12 text-center">
                <div className="flex justify-center mb-3 text-yellow-400">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-lg italic mb-4">
                  "इस प्लेटफ़ॉर्म ने मुझे सिर्फ़ काम ही नहीं, बल्कि आत्मविश्वास भी दिया है। अब लोग मेरे बनाए खाने की तारीफ़ करते हैं और यही सबसे बड़ी खुशी है।"
                </p>
                <div className="w-12 h-[2px] bg-gray-300 mx-auto my-3"></div>
                <h4 className="text-md font-semibold">अनिता वर्मा</h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

           
           
           