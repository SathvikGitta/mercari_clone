import React from 'react'
import HeaderBanner from '../HeaderBanner';
import Card from './Card';
import Athelectic from "../pages/Atheletic"
import Shoes from "../pages/Shoes"
import FooterBanner from '../layouts/FooterBanner';
import Footer from '../layouts/Footer';



function ChildHeader() {
    return (
        <>
            <HeaderBanner />
            <Card />
            <Athelectic />
            <Shoes />
            <FooterBanner />
            <Footer />
        </>
    )
}

export default ChildHeader