import React from "react";

const ContactLower = () => {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-start gap-10 md:gap-16 px-6 md:px-16 py-10">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-black text-xl md:text-2xl font-bold mb-6">
            Our mission is to provide at-home cooking services in a way that has
            never been experienced before by empowering millions of cooks across
            India
          </p>
          <img
            className="object-cover rounded-lg w-full max-w-lg"
            alt="chef"
            src="https://github.com/Nikhil-8059/ChefExpress/blob/main/ChefExpress/public/images/7be9b858-1468-46c3-b1ea-7df98a648efd.png?raw=true"
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-start text-left gap-6">
          <img
            className="object-cover rounded-lg w-full max-w-lg"
            alt="dish"
            src="https://feelgoodfoodie.net/wp-content/uploads/2023/09/Chicken-Burrito-Bowl-TIMG.jpg"
          />
          <div>
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
      </div>
    </section>
  );
};

export default ContactLower;
