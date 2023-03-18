import React from 'react'
import Header from './layouts/Header'
import HeaderBanner from './HeaderBanner'
import Card from './layouts/Card'
import { Outlet } from 'react-router-dom'


function HomePage() {
    return (
        <>
            <Header />
        </>
    )
}

export default HomePage