import React, { useState } from 'react'
import "../../index.css";
import UiDesign from './UiDesign';


const Project = () => {

  const [activeCard, setActiveCard] = useState(null);


  const projectList = [
    {
      id: 1,
      name: "Bharat Explorer",
      img: "/Project1.png",
      description: "Bharat Explorer – A web platform showcasing India’s diverse tourist destinations. Each destination page includes images, overview, history, visitor information, and many more details. Users can also contribute by becoming hosts and adding their favorite destinations.",
      GitHub: "https://github.com/ROHANCHOUKSEY/TravelApp",
      Live: "https://travelapp-frontend-uaz9.onrender.com/",
      visitDes: "👉 Visit the live site to explore more",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"]
    },
    {
      id: 2,
      name: "GadgetGalaxy",
      img: "/Project2.png",
      description: "AudioHaven Hub – An e-commerce website where customers can explore and purchase a variety of electronic products such as mobile phones, headphones, and laptops. Designed with a focus on a smooth, user-friendly shopping experience.",
      GitHub: "https://github.com/ROHANCHOUKSEY/new_shopping",
      Live: "",
      technologies: ["Next.js", "JavaScript", "Sanity", "CSS"]
    },
    {
      id: 3,
      name: "ChatHub",
      img: "/Project3.png",
      description: "ChatHub is a real-time chat application that allows users to communicate with each other through text messages and share images. The primary goal was to create a seamless and user-friendly chat experience for individual.",
      GitHub: "https://github.com/ROHANCHOUKSEY/new_shopping",
      Live: "",
      technologies: ["React", "JavaScript", "Firebase", "CSS"]
    },
  ]

  return (
    <div>
      <section className='w-full py-15 px-4 mb-10'>
        <div className='text-center mb-10'>
          <h1 className='text-black dark:text-white text-4xl md:text-5xl font-bold mb-4'>PROJECTS</h1>
          <div className="mx-auto mt-2 h-1 w-48 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Projects that showcase my work and creativity
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer'>
          {
            projectList.map((project, id) => (
              <div key={id} className='relative flex flex-col group overflow-hidden h-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2 dark:bg-gray-800 border-4   border-gray-200 dark:border-gray-700'
                onMouseEnter={() => setActiveCard(project.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={project.img}
                    alt={project.name}
                    className='w-full h-50 transition-transform duration-500 group-hover:scale-110:' />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className='p-4 text-white'>
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <div className='flex flex-row gap-2'>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className='text-xs bg-red-500/80 px-2 py-1 rounded-full'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-3 overflow-hidden'>
                  <p className='md:text-[14px] text-gray-700 dark:text-white leading-7'>{project.description}</p>
                  {project.visitDes && (
                    <p className='text-red-500 font-bold mt-4'>{project.visitDes}</p>
                  )}
                </div>

                <div className='p-2 mt-auto'>
                  <div className='flex space-x-3 mt-4'>
                    <a
                      href={project.GitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>Code
                    </a>

                    {project.Live && (
                      <a
                        href={project.Live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center text-[12px] sm:text-[14px] md:text-[15px] gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* UI Design Section */}
        <UiDesign/>


      </section>
    </div>
  )
}

export default Project


 




