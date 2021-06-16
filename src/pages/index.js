import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObject, homeObjectthree, homeObjecttwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Router>
                <Sidebar isOpen={isOpen} toggle={toggle} /> 
                <Navbar toggle={toggle} />
                <HeroSection />
                <InfoSection {...homeObject} />
                <InfoSection {...homeObjecttwo} />
                <Services />
                <InfoSection {...homeObjectthree} />
                <Footer />
            </Router>
        </>
    )
}

export default Home;
