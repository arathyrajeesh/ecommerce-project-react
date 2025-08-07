import React from 'react'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanner'
import GivingBack from '../components/GivingBack'
import Selling from '../components/Selling'

const Homepage = () => {
    return (
        <>
        <Hero/>
        <PromoBanners/>
        <GivingBack/>
        <Selling/>
        </>
    )
}

export default Homepage
