import React from 'react'
import Category from './category'
import Contact from './contact'
import Feature from './feature'
import Hero from './hero'
import Team from './team'

function Home() {
    return (
        <>
            <Hero />
            <Feature />
            {/* <Category /> */}
            <Team />
            <Contact />
        </>
    )
}

export default Home
