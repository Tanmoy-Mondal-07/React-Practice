import React from 'react'
import Footer from './comp/Footer/Footer'
import Header from './comp/Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Root
