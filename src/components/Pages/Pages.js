import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../shared/Header/Header';
import Skills from '../Skills/Skills';

const Pages = () => {
    return (
        <div>
           <Header></Header> 
           <Intro></Intro>
           <About></About>
           <Skills></Skills>

           <Portfolio></Portfolio>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Pages;<Header></Header>