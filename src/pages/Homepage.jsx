import React from 'react'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanner'
import GivingBack from '../components/GivingBack'
import Selling from '../components/Selling'
import ImageSlider from '../components/ImageSlide'

const Homepage = () => {
    return (
        <>
        <Hero/>
        <PromoBanners/>
        <GivingBack/>
        <Selling/>
        <ImageSlider/>
        </>
    )
}

export default Homepage
