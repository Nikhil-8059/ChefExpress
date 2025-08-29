import React from 'react'

const Lower = () => {
  return (
    <section className="bg-[#fdf1e6] hidden md:block">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-12 py-20 items-center">
        
        {/* Left Heading */}
        <div className="flex justify-center">
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight text-center">
            <span>ChefExpress के </span>
            <span className="text-orange-500 leading-snug font-extrabold">
              4500 से भी ज़्यादा कुक्स
            </span>
            <span> का हिस्सा बनें।</span>
          </h3>
        </div>

        {/* Right Paragraph */}
        <div className="flex justify-between">
          <p className="text-2xl text-gray-700 leading-relaxed text-justify max-w-md">
            इज़्ज़त और गर्व के साथ जिएँ। ChefExpress की ट्रेनिंग व सहायता से अपने
            खाना बनाने के कौशल को एक नई मंज़िल पर ले जाएँ।
          </p>
        </div>
      </div>
    </section>
  )
}

export default Lower
