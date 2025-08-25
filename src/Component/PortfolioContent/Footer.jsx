import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='shadow-[0px_-8px_10px_0px_rgba(0,_0,_0,_0.1)] bg-gray-100 dark:bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-10 px-6 md:px-12 lg:px-20'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    {/* Left Side */}
                    <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left'>
                        <h1 className='text-gray-700 dark:text-white text-2xl font-bold'>Rohan Chouksey</h1>
                        <p className='text-gray-700 dark:text-white text-lg'>Full Stack Developer</p>
                    </div>

                    {/* Center */}
                    <div className='flex-1 flex flex-col items-center'>
                        <h3 className='text-gray-700 dark:text-white text-lg font-bold'>Connect With Me</h3>
                        <div className='flex flex-row items-center gap-4 mt-2'>
                            <a href="https://github.com/ROHANCHOUKSEY"><img src="/Icons/GitHub.png" alt="gitHub" className='w-8 hover:-translate-y-2 duration-300 rounded-full hover:shadow-lg shadow-white' /></a>
                            <a href="https://www.linkedin.com/in/rohan-chouksey-9a7995203/"><img src="/Icons/linkedin.png" alt="linkedin" className='w-8 hover:-translate-y-2 duration-300 rounded-full hover:shadow-lg shadow-blue-600' /></a>
                            <a href="https://www.instagram.com/rohanui_vibes?igsh=MXZjampzMDFnbTJvbw=="><img src="/Icons/instagram.png" alt="instagram" className='w-8 hover:-translate-y-2 duration-300 rounded-full hover:shadow-lg shadow-pink-600' /></a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='flex-1 flex flex-col items-center md:items-end font-bold'>
                        <h3 className='text-gray-700 dark:text-white text-lg'>Get In Touch</h3>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row items-center gap-2'>
                                <img src="/Icons/email.png" alt="email" className='w-5' />
                                <p className='text-gray-700 dark:text-white font-medium'>rohanchouksey02@gmail.com</p>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <img src="/Icons/phone.png" alt="phone" className='w-5' />
                                <p className='text-gray-700 dark:text-white font-medium text-center'>+91-7898924256</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="border-t border-neutral-700 pt-6 text-center mt-10  ">
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} Rohan Chouksey. All rights reserved.   
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer




