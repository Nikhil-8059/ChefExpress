import React from 'react'
import FAQ2 from './Faq2'
import Lower from './Lower'
import Low from './Low'
import Testimonials from './Testimonials'
import Cater from './Cater'

import SimpleSlider from './Slider'

import StatsSection from './Stats'
import HeroCarousel from './Carousel'

const ChefConnection = () => {
  return (
    <div>
      <HeroCarousel/>
      <StatsSection/>
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