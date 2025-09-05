import React from 'react'

const Cater = () => {
  return (
    <div>
       
    <section className="text-gray-600 body-font">

                <h1 className='text-center text-black font-bold text-3xl mt-2'>ChefExpress से क्यूँ जुड़ें?</h1>
      <div className="container px-5 py-10">

        
        <div className="flex flex-wrap -m-4 justify-center lg:gap-14">      
          {/* Card 1 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full ">
              <img
                className="lg:h-48 md:h-36 w-full object-fit rounded-lg"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FEarn_Money_c09cff227a.webp&w=1920&q=75"
                alt="blog"
              />
              <div className="p-6">
               
                <h1 className="title-font text-xl text-center font-bold text-gray-900 mb-2">
                  नियमित पैसे
                </h1>
                <p className="leading-relaxed text-xl text-center">
                  अपनी दैनिक कमाई के पैसे नियमित रूप से उसी दिन पाएँ।
                </p>
                
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-fill object-center"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBe_your_own_boss_1_ff6c9822fd.webp&w=1920&q=75"
                alt="blog"
              />
              <div className="p-6">
                
                <h1 className="title-font text-xl text-center font-bold text-gray-900 mb-2">
                  सम्मान से काम
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_support_26823bc403.webp&w=1920&q=75"
                alt="blog"
              />
              <div  className="p-6">
                
                <h1 className="title-font text-xl text-center font-bold text-gray-900 mb-2">
                  ट्रेनिंग एवं सहायता
                </h1>
                <p className="leading-relaxed mb-3 text-xl text-center">
                  हमारे शेफ़ से ट्रेनिंग में नए पकवान बनाना सीखें। किसी भी समस्या में तुरंत सहायता पाएँ।
                </p>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Cater