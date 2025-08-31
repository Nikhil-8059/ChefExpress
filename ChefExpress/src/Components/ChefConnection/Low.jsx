import React from 'react'

const Low = () => {
  return (
    <div>
         <section className="text-gray-600 bg-slate-600 body-font overflow-hidden">
      <div className="container px-5 py-8">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="Chefs"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://github.com/Nikhil-8059/ChefExpress/blob/main/ChefExpress/public/images/7be9b858-1468-46c3-b1ea-7df98a648efd.png?raw=true"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-2xl title-font text-orange-400 font-bold tracking-normal">
              हमें है विश्वास
            </h2>
            <h1 className="text-gray-900 text-justify text-6xl title-font font-extrabold mb-1">
              आपका बनाया खाना, खाएगा ज़माना!
            </h1>

            <h2 className="mt-8 text-xl title-font text-black font-bold tracking-normal">
              ऊपर जाएँ
            </h2>
           
              <button className="flex mt-8 text-white font-bold text-2xl bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded-lg">
                ChefExpress से जुड़ें
              </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Low