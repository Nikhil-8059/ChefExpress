import React from "react";

const ContactLower = () => {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center gap-16 px-6 md:px-16 py-10">
        {/* Left Side */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <p className="text-black text-xl md:text-2xl font-bold mb-4">
            Our mission is to provide at-home cooking services in a way that has
            never been experienced before by empowering millions of cooks across
            India
          </p>
          <img
            className="object-cover rounded md:max-w-sm"
            alt="chef"
            src="https://i.pinimg.com/474x/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.jpg"
            
          />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4" >
          <img
            className="w-full max-w-md md:max-w-lg sm:max-w-xs h-auto object-cover rounded"
            alt="dish"
            src="https://feelgoodfoodie.net/wp-content/uploads/2023/09/Chicken-Burrito-Bowl-TIMG.jpg"
            
          />
          <p className="text-black text-lg md:text-xl mb-4">
            ChefExpress is a platform that connects home chefs and households
            seamlessly by building an ecosystem. Our professionals are
            handpicked to serve you hygienic and wholesome meals catered to your
            taste!
          </p>
          <p className="text-red-500 text-lg md:text-xl underline cursor-pointer">
            Read about our story
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactLower;
