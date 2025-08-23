import React from 'react'
import { ReactTyped } from "react-typed"
import { Download } from "lucide-react";

const About = () => {

  return (
    <>
      {/* Introduction Section */}
      <div className='flex flex-col justify-between align-middle items-center relative top-[18px] md:top-[0px] md:p-[57px] md:flex-row'>
        <div className='relative md:top-[70px] text-black w-full dark:text-white'>

          {/* Introduction */}
          <h4 className='text-center md:text-left text-2xl font-bold text-red-500'>Hello, I'm Rohan Chouksey</h4>
          <h4 className='text-center text-gray-700 dark:text-white md:text-lg md:text-left leading-7'>
            I am a enthusiastic and passionate Full-Stack Developer skilled in React, JavaScript, Node.js, Express.js, and MongoDB. I build dynamic, scalable, and responsive web applications with clean and efficient code.
          </h4>

          {/* Skill Animation */}
          <h1 className='text-2xl text-center md:text-left'>I am a {" "}
            <ReactTyped className='text-base md:text-3xl font-bold text-red-500'
              strings={[
                "Programmer",
                "Full Stack Developer",
                "Frontend Developer",
                "UI-UX Designer"
              ]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </h1>

          {/* ContactUs Button */}
          <div className='flex justify-center md:justify-start'>
            <button className="flex justify-center items-center text-base font-medium mt-5 h-10 w-30 bg-red-500 text-white  dark:bg-white rounded-sm cursor-pointer dark:text-red-500 shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              ContactUs
            </button>
          </div>
        </div>
 
        {/* AboutUS Img */}
        <div className='md:relative md:left-[50px]
  border-t-[20px] border-t-transparent 
  border-b-[20px] border-b-transparent 
  border-r-[20px] border-r-red-500'>
          <img src="/Img3.png" alt="" className='md:w-[50rem]' />
        </div>
      </div>

      {/* About-Me Section  */}
      <div className='flex flex-col-reverse md:flex-row  mt-20 '>
        <div className='flex flex-row mt-4 md:mt-0 md:w-[57rem]'>
          <div className='md:relative 
        border-t-[20px] border-t-transparent 
        border-b-[20px] border-b-transparent  
        border-r-[20px] border-r-red-500'>
          </div>
          <img src="/Img2.png" alt="AboutUSImg" className='w-[93%]' />
        </div>
        <div className='w-full md:pr-[20px]'>
          <h1 className='text-center mb-4 md:mb-0 md:text-left text-2xl dark:text-white'>About Me</h1>
          <div className='md:w-full h-[2px] w-48 relative left-15 md:left-0 bg-gradient-to-r from-transparent via-red-500 to-transparent md:bg-none md:bg-black dark:md:bg-white  md:h-0.5 md:mb-4'></div>
          <p className='text-center mt-5 md:mt-0 md:text-left text-gray-700 dark:text-white leading-7'>My name is Rohan Chouksey, and I am a passionate Full-Stack and Frontend Developer focused on building fully responsive, dynamic, and user-friendly websites. I enjoy creating modern interfaces, optimizing performance, and ensuring seamless cross-device experiences. I also work with Figma to design engaging UI/UX that blends creativity with functionality, allowing me to develop applications that are both intuitive and visually compelling.</p>

          {/* Resume Download */}
          <div className='flex justify-center md:justify-start'>
            <a href="https://drive.google.com/file/d/11vvJmVduGR3IjdnfL3zzO45a2gtXOAz9/view?usp=sharing">
              <button className="relative flex justify-center  items-center gap-2 w-[160px]  rounded-full  px-6 py-3 mt-4 text-black  bg-white border-2 border-black dark:text-red-500 dark:border-none  transition cursor-pointer group">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span className="font-medium">Resume</span>
              </button>
            </a>
          </div>


          <div className='mt-7'>
            <h1 className='text-center mb-4 md:mb-0 md:text-left text-black text-2xl dark:text-white'>Education</h1>
            <div className='md:w-full h-[2px] w-48 relative left-15 md:left-0 bg-gradient-to-r from-transparent via-red-500 to-transparent md:bg-none md:bg-black dark:md:bg-white  md:h-0.5 md:mb-4 '></div>
            <ul className='text-center text-gray-700 md:text-left list-disc  md:relative left-[16px]  dark:text-white'>
              <li><span className='text-lg font-bold'>B.Tech - </span>Computer Science and Engineering</li>
              <li><span className='text-lg font-bold'>CGPA - </span>8.58</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default About 