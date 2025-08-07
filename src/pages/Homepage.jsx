import React from 'react'
import Hero from '../components/Hero'
import GivingBack from '../components/GivingBack'
import Selling from '../components/Selling'
import ImageSlider from '../components/ImageSlide'
import PromoSection from '../components/PromoBanner'

const Homepage = () => {
    return (
        <>
        <Hero/>
        <PromoSection/>
        <GivingBack/>
        <Selling/>
        <ImageSlider/>
        </>
    )
}

export default Homepage
