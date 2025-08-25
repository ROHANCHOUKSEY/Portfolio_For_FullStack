import React from 'react'
import { Element } from 'react-scroll'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Experience from './Experience'
import ContactUs from './ContactUs'
import Footer from './Footer'

const AllContent = () => {
    return (
        <>
            <div className='h-auto w-full relative top-[60px] dark:bg-black dark:bg-[radial-gradient(rgba(229,231,235,0.1)_1px,transparent_1px)] [background-size:30px_30px]'>
                <Element name='about'>
                    <About />
                </Element>
                <Element name='skills'>
                    <Skills />
                </Element>
                <Element name='project'>
                    <Project/>
                </Element>
                <Element name='experience'>
                    <Experience/>
                </Element>
                <Element name='contactus'>
                    <ContactUs/>
                </Element>
                <Footer/>
            </div>
        </>
    )
}

export default AllContent

