import React from 'react'
import FAQ2 from './Faq2'
import Lower from './Lower'
import Low from './Low'
import Testimonials from './Testimonials'
import Cater from './Cater'
// import Slider from './Slider'
import SimpleSlider from './Slider'

const ChefConnection = () => {
  return (
    <div>
      <SimpleSlider/>
      <Cater/>
        <Testimonials/>
        <Low/>
        <Lower/>
        <FAQ2/>
    </div>
  )
}

export default ChefConnection