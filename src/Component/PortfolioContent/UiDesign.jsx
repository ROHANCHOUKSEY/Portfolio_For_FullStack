import React from 'react'
import "../../index.css";

const UiDesign = () => {

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
    <section className='w-full py-15 px-4 mb-10'>
      <div className="text-center mb-5">
          <h1 className='text-black dark:text-white text-4xl md:text-5xl font-bold mb-4'>UI DESIGNS</h1>
          <div className="mx-auto mt-2 h-1 w-48 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of my UI/UX design work and concepts          
          </p>
      </div>
      <div className='h-95 md:h-110 border-4 overflow-hidden rounded-2xl bg-gradient-to-r  from-[#0f172a]  to-[#121822] p-6  mt-10 shadow-md shadow-gray-500'> 
        <div className='flex flex-row gap-10 scroll-slider scroll-animation'>
            {[...UIDesignList, ...UIDesignList].map((uiImg, index) => (
              <img key={index} src={uiImg.img} alt="Ui-DesignImg" className='w-70 h-60 md:h-75 md:w-85 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-md shadow-gray-700' />                                                                                                    
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





// import React, { useState, useEffect } from 'react';
// import "../../index.css";

// const UiDesign = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const UIDesignList = [
//     { img: "/UIDesigns/2.png", title: "Minimal Dashboard", category: "Dashboard" },
//     { img: "/UIDesigns/5.png", title: "E-commerce App", category: "Mobile" },
//     { img: "/UIDesigns/6.png", title: "Finance Dashboard", category: "Dashboard" },
//     { img: "/UIDesigns/9.png", title: "Travel App", category: "Mobile" },
//     { img: "/UIDesigns/12.png", title: "Music Player", category: "Mobile" },
//     { img: "/UIDesigns/13.png", title: "Fitness Tracker", category: "Web" },
//     { img: "/UIDesigns/14.png", title: "Booking System", category: "Web" },
//     { img: "/UIDesigns/17.png", title: "Social Media UI", category: "Mobile" },
//   ];

//   // Pause animation on hover
//   useEffect(() => {
//     const slider = document.querySelector('.scroll-animation');
//     if (slider) {
//       if (isHovered) {
//         slider.style.animationPlayState = 'paused';
//       } else {
//         slider.style.animationPlayState = 'running';
//       }
//     }
//   }, [isHovered]);

//   const openModal = (img) => {
//     setSelectedImage(img);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <>
//       <section className="w-full py-12 px-4 mb-10 mt-20">
//         <div className="text-center mb-10">
//           <h1 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-4">UI DESIGNS</h1>
//           <div className="mx-auto mt-2 h-1 w-48 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
//           <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
//             A collection of my UI/UX design work and concepts
//           </p>
//         </div>

//         <div 
//           className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 shadow-xl"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Decorative elements */}
//           <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
//           <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-500/10 rounded-full translate-x-20 translate-y-20"></div>
          
//           <div className="flex flex-row gap-8 scroll-animation">
//             {[...UIDesignList, ...UIDesignList].map((uiImg, index) => (
//               <div 
//                 key={index} 
//                 className="relative group w-60 h-80 flex-shrink-0 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
//                 onClick={() => openModal(uiImg.img)}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10 flex flex-col justify-end p-4">
//                   <h3 className="text-white font-bold text-lg">{uiImg.title}</h3>
//                   <span className="text-red-300 text-sm">{uiImg.category}</span>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
//                   View
//                 </div>
//                 <img 
//                   src={uiImg.img} 
//                   alt="UI Design" 
//                   className="w-full h-full object-cover rounded-2xl shadow-lg" 
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Gradient overlays on sides */}
//           <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10"></div>
//         </div>

//         <div className="text-center mt-8">
//           <p className="text-gray-500 dark:text-gray-400 text-sm">
//             Hover to pause the animation • Click to view larger
//           </p>
//         </div>
//       </section>

//       {/* Modal for enlarged image view */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
//           onClick={closeModal}
//         >
//           <div className="relative max-w-4xl max-h-full">
//             <button 
//               className="absolute -top-12 right-0 text-white text-3xl hover:text-red-500 transition-colors"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <img 
//               src={selectedImage} 
//               alt="Enlarged UI Design" 
//               className="max-w-full max-h-full object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UiDesign;



