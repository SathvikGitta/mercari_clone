import React from 'react'
import Header from './layouts/Header'
import HeaderBanner from './HeaderBanner'
import Card from './layouts/Card'
import Athelectic from "./pages/Atheletic";
import Shoes from "./pages/Shoes"
import FooterBanner from './layouts/FooterBanner';
import Footer from './layouts/Footer';
import { Outlet } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <Header />
            <HeaderBanner />
            <Card />
            <Athelectic />
            <Shoes />
            <FooterBanner />
            <Footer />
        </>
    )
}

export default HomePage