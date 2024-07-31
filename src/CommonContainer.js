import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/navbar'

function CommonContainer({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default CommonContainer
