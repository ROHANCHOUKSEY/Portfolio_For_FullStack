import { Briefcase } from 'lucide-react'
import React from 'react'

const Experience = () => { 
    return (
        <>
            <section className='w-full py-15 px-4 mb-10'>
                <div className='text-center mb-10'>
                    <h1 className='text-black dark:text-white text-4xl md:text-5xl font-bold mb-4'>EXPERIENCE</h1>
                    <div className="mx-auto mt-2 h-1 w-48 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        My professional journey and hands-on experience in the tech industry
                    </p>
                </div>
                <div className='h-auto rounded-2xl bg-gray-50 dark:bg-gradient-to-r  from-[#0f172a]  to-[#121822] p-6  mt-10 shadow-[0_3px_10px_rgb(0,0,0,0.30)]'>
                    <div className='flex flex-row items-baseline  border-4 justify-start gap-10 border-none md:px-[180px] '>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='relative flex justify-center items-center'>
                                <div className='absolute w-8 h-8 bg-red-500 rounded-full opacity-30 animate-ping'></div>
                                <div className='bg-red-500 w-4 h-4  rounded-full  shadow-[-1px_-2px_20px_8px_red]'></div>
                            </div>
                            <div className='bg-white w-1 h-295 md:h-90  rounded-full shadow-[0px_-8px_10px_0px_rgba(0,_0,_0,_0.35)]'></div>
                        </div>
                        <div className='text-white flex flex-col gap-2'>
                            <h1 className=' flex gap-2 text-gray-700 dark:text-white items-center text-base md:text-2xl  font-bold'>Frontend Developer
                                <Briefcase  className='relative md:top-1'/>
                            </h1>
                            <h4 className='text-red-300 font-medium'>Cyber Instant Pvt. Ltd</h4>
                            <p className='text-gray-700 dark:text-white'>During my internship at Cyber Instant Pvt. Ltd, I worked as a Frontend Developer, where I gained hands-on experience in building and optimizing modern, responsive, and user-friendly web applications. My role primarily focused on implementing intuitive UI designs and ensuring seamless functionality across devices.</p>
                            <ul>
                                <li className="flex items-start gap-2 mb-3">
                                    <span className="text-red-500 text-lg">➤</span>
                                    <p className='text-gray-700 dark:text-white'>
                                        Developed and maintained responsive web interfaces using HTML, CSS, JavaScript, and React.js, ensuring cross-browser compatibility and optimal performance.
                                    </p>
                                </li>
                                <li className="flex items-start gap-2 mb-3">
                                    <span className="text-red-500 text-lg">➤</span>
                                    <p className='text-gray-700 dark:text-white'>
                                        Collaborated with designers, backend developers, and senior engineers to translate wireframes and business requirements into functional features.
                                    </p>
                                </li>
                                <li className="flex items-start gap-2 mb-3">
                                    <span className="text-red-500 text-lg">➤</span>
                                    <p className='text-gray-700 dark:text-white'>
                                        Integrated RESTful APIs into applications, enabling real-time data updates and improving user experience.
                                    </p>
                                </li>
                                <li className="flex items-start gap-2 mb-3">
                                    <span className="text-red-500 text-lg">➤</span>
                                    <p className='text-gray-700 dark:text-white'>
                                        Improved knowledge of performance optimization techniques, such as lazy loading and code splitting, resulting in faster rendering and smoother navigation.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience 