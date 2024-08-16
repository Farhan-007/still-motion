import React from 'react'
import ContactPop from './components/ContactPop'
import Footer from './components/Footer'
import Navbar from './components/navbar'

function CommonContainer({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <ContactPop />
            <Footer />
        </>
    )
}

export default CommonContainer
