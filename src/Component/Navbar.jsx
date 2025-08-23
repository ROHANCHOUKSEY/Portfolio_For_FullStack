import React, { useContext, useEffect, useState } from 'react'
import { Code, Cross, Folder, Mail, Menu, Palette, User, X } from 'lucide-react';
import { ThemeContext } from '../ThemeContext/ContextProvider';
import { Link } from "react-scroll";
import About from './PortfolioContent/About';
import Skills from './PortfolioContent/Skills';
import Project from './PortfolioContent/Project';
import UiDesign from './PortfolioContent/UiDesign';
import ContactUs from './PortfolioContent/ContactUs';

const Navbar = () => {
 
    const { screenMode, darkMode, lightMode } = useContext(ThemeContext);

    const [sideBar, setSideBar] = useState(() => {
        const sideBarStore = localStorage.getItem("sideBar")
        return sideBarStore ? JSON.parse(sideBarStore) : "false"
    }); 

    const [activeTab, setActiveTab] = useState(() => {
        const storeTab = localStorage.getItem("activeTab")
        return storeTab ? storeTab : "about"
    });

    console.log("activeTab: ", activeTab);

    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab])

    //Modechange Functionality
    const handletoogle = (e) => {
        const checkMode = e.target.checked;
        if (checkMode) {
            darkMode();
        } else {
            lightMode();
        }
    }


    //Sidebar Functionality
    useEffect(() => {
        localStorage.setItem("sideBar", JSON.stringify(sideBar));
    }, [sideBar]);

    const handleSideBar = () => {
        setSideBar(!sideBar);
    }

    return (
        <>
            <div className="flex justify-between z-10 items-center w-full h-[60px] px-6 bg-white shadow-xl/30 shadow-gray-400 fixed dark:bg-black">
                <h1>Logo</h1>
                {/* Desktop Menu */}
                <ul className='hidden md:flex  justify-center align-middle  items-center gap-14 text-black dark:text-white cursor-pointer'>
                    <div className={`flex justify-center items-center ${activeTab === 'about' ? "bg-red-600 text-white" : ""} w-25 h-10 rounded-sm`}>
                        <Link to="about" smooth={true} duration={500} spy={true}>
                            <li onClick={() => setActiveTab("about")} >About Us</li>
                        </Link>
                    </div>
                    <div className={`flex justify-center items-center ${activeTab === 'skills' ? "bg-red-600 text-white" : ""} w-25 h-10 rounded-sm`}>
                        <Link to="skills" smooth={true} duration={500} spy={true}>
                            <li onClick={() => setActiveTab("skills")}>Skills</li>
                        </Link>
                    </div>
                    <div className={`flex justify-center items-center ${activeTab === 'projects' ? "bg-red-600 text-white" : ""} w-25 h-10 rounded-sm`}>
                        <Link to="project" smooth={true} duration={500} spy={true}>
                            <li onClick={() => setActiveTab("projects")}>Project</li>
                        </Link>
                    </div>
                    <div className={`flex justify-center items-center ${activeTab === 'ui-design' ? "bg-red-600 text-white" : ""} w-25 h-10 rounded-sm`}>
                        <Link to="uidesign" smooth={true} duration={500} spy={true}>
                            <li onClick={() => setActiveTab("ui-design")}>UI Design</li>
                        </Link>
                    </div>
                    <div className={`flex justify-center items-center ${activeTab === 'contact-us' ? "bg-red-600 text-white" : ""} w-25 h-10 rounded-sm`}>
                        <Link to="contactus" smooth={true} duration={500} spy={true}>
                        <li onClick={() => setActiveTab("contact-us")}>Contact Us</li>    
                        </Link>
                    </div>
                </ul>

                {/* ScreenMode Button */}
                <label className="hidden md:flex items-center relative ">
                    <input className="peer hidden" id="toggle" onChange={handletoogle} checked={screenMode === "dark"} type="checkbox" />
                    <div
                        className="relative w-[89px] h-[40px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[35px] after:h-[35px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[3px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[81px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
                    ></div>
                    <svg
                        height="0"
                        width="100"
                        viewBox="0 0 24 24"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px] cursor-pointer"
                    >
                        <path
                            d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                        ></path>
                    </svg>
                    <svg
                        height="512"
                        width="512"
                        viewBox="0 0 24 24"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px] cursor-pointer"
                    >
                        <path
                            d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                        ></path>
                    </svg>
                </label>

                <button onClick={handleSideBar} className='md:hidden text-black  dark:text-white'>
                    {sideBar === true ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 h-screen w-[200px] bg-blue-950 dark:bg-gray-800 text-white px-2 transition-transform duration-300 shadow-2xl shadow-gray-900  ${sideBar ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                    <ul className='flex flex-col gap-6 text-white cursor-pointer relative top-10 text-[15px] md:hidden'>
                        <div className='flex gap-1.5 items-center'>
                            <User size={20} />
                            <Link to="about" smooth={true} duration={500} spy={true}><li>About Us</li></Link>
                            
                        </div>
                        <span className='w-full h-[1px] bg-gray-700'></span>

                        <div className='flex gap-1.5 items-center'>
                            <Code size={20} />
                            <Link to="skills" smooth={true} duration={500} spy={true}><li>Skills</li></Link>
                            
                        </div>
                        <span className='w-full h-[1px] bg-gray-700'></span>

                        <div className='flex gap-1.5 items-center'>
                            <Folder size={20} />
                            <Link><li>Project</li></Link>
                            
                        </div>
                        <span className='w-full h-[1px] bg-gray-700'></span>

                        <div className='flex gap-1.5 items-center'>
                            <Palette size={20} />
                            <Link><li>UI Design</li></Link>
                        
                        </div>
                        <span className='w-full h-[1px] bg-gray-700'></span>

                        <div className='flex gap-1.5 items-center'>
                            <Mail size={20} />
                            <Link><li>Contact Us</li></Link>
                            

                        </div>
                        <label className="inline-flex items-center relative">
                            <input className="peer hidden" id="toggle" onChange={handletoogle} checked={screenMode === "dark"} type="checkbox" />
                            <div
                                className="relative w-[89px] h-[40px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[35px] after:h-[35px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[3px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[81px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
                            ></div>
                            <svg
                                height="0"
                                width="100"
                                viewBox="0 0 24 24"
                                data-name="Layer 1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
                            >
                                <path
                                    d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                                ></path>
                            </svg>
                            <svg
                                height="512"
                                width="512"
                                viewBox="0 0 24 24"
                                data-name="Layer 1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[108px]  md:right-[13px]"
                            >
                                <path
                                    d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                                ></path>
                            </svg>
                        </label>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
