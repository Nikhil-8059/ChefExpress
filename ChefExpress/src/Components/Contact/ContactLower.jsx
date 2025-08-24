import React from "react";

const ContactLower = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-40 py-15 md:flex-row flex-col items-center gap-10">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
          <p className="text-black text-xl md:text-2xl font-bold text-center md:text-left mb-4">
            Our mission is to provide at-home cooking services in a way that has
            never been experienced before by empowering millions of cooks across
            India
          </p>
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://i.pinimg.com/474x/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.jpg"
            style={{ height: 400, width: 400 }}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <img
            className="object-cover object-center rounded w-full md:w-auto mb-6"
            alt="hero"
            src="https://feelgoodfoodie.net/wp-content/uploads/2023/09/Chicken-Burrito-Bowl-TIMG.jpg"
            style={{ height: 400, width: 400 }}
          />
          <p className="text-black text-lg md:text-xl  md:text-left mb-4">
            ChefExpress is a platform that connects home chefs and households
            seamlessly by building an ecosystem. Our professionals are
            handpicked to serve you hygienic and wholesome meals catered to your
            taste!
          </p>
         
        
        </div>
      </div>
    </section>
  );
};

export default ContactLower; 

