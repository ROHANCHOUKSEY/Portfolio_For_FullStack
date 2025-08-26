import React, { useState } from 'react'
import "../../index.css";

const UiDesign = () => {

  const[isHovering, setIsHovering] = useState(false);

  const UIDesignList = [
    { img: "/UIDesigns/2.png" },
    { img: "/UIDesigns/5.png" },
    { img: "/UIDesigns/6.png" },
    { img: "/UIDesigns/9.png" },
    { img: "/UIDesigns/12.png" },
    { img: "/UIDesigns/13.png" },
    { img: "/UIDesigns/14.png" },
    { img: "/UIDesigns/17.png" },
  ]

  return (   
    <>
    <section className='w-full mt-6 px-4'>
      <div className="text-center mb-5">
          <h1 className='text-black dark:text-white text-4xl md:text-5xl font-bold mb-4'>UI DESIGNS</h1>
          <div className="mx-auto mt-2 h-1 w-48 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            A collection of my UI/UX design work and concepts          
          </p>
      </div>
      <div className='h-95 md:h-110 flex flex-col justify-center  overflow-hidden rounded-2xl bg-gray-50 dark:bg-gradient-to-r  from-[#0f172a]  to-[#121822] p-6  mt-10 shadow-[0_3px_10px_rgb(0,0,0,0.30)]'> 
        <div className={`flex flex-row gap-10 scroll-slider scroll-animation ${isHovering && 'animation-paused'}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
            {[...UIDesignList, ...UIDesignList].map((uiImg, index) => (
              <img key={index} src={uiImg.img} alt="Ui-DesignImg" className='w-55 h-40 sm:w-75 sm:h-60 md:h-75 md:w-100 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-md shadow-gray-700 hover:animation-paused' />                                                                                                    
          ))}
        </div> 
        <div className='flex justify-center'>
          <a href="https://ui-design-mu.vercel.app/">
            <button className='text-base text-white bg-red-600 hover:bg-red-700  w-30 h-10 rounded-sm mt-10 cursor-pointer'>EXPLORE MORE</button> 
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default UiDesign





