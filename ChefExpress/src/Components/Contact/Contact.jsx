import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ContactLower from "./ContactLower";

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <section
        className="text-gray-600 body-font relative bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/e6/7d/af/e67daf68a6e8f6d4a9283cb7d64b098c.jpg')`,
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container relative z-10 px-5 py-20 mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 bg-white/90 rounded-2xl shadow-lg p-8">
            {/* Map Section */}
            <div className="lg:w-2/3 w-full rounded-lg overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3508.8836311075306!2d77.08036!3d28.422768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e0!3m2!1sen!2sin!4v1755887874990!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full rounded-lg min-h-[200px]"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/3 w-full bg-white rounded-xl shadow-md p-6">
              <h2 className="text-gray-900 text-3xl text-center mb-4 font-bold">
                Contact Us
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Fill out the form and we’ll get back to you soon.
              </p>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Mobile
                </label>
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={setPhone}
                  enableSearch={true}
                  inputClass="!w-full !bg-white !rounded-lg !border !border-gray-300 focus:!border-orange-500 focus:!ring-2 focus:!ring-orange-200 !text-base !outline-none !text-gray-700 !py-2 !px-3"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3"
                />
              </div>

              {/* City */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-400 py-2 px-3"
                >
                  <option value="" disabled>
                    Select your city
                  </option>
                  <option>Ahmedabad</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Delhi</option>
                  <option>Gurugram</option>
                  <option>Hyderabad</option>
                  <option>Jaipur</option>
                  <option>Kolkata</option>
                  <option>Lucknow</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Please write your message in detail."
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-28 text-base outline-none text-gray-700 py-2 px-3 resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button className="w-full text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-lg text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactLower />
    </div>
  );
};

export default Contact;
