import React, { useEffect, useState } from 'react'

const Skills = () => {

 const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

 const skillsImg = [
    {
      name: "React.Js",
      img: "/react.svg",
      color: "from-cyan-400 to-blue-600",
      shadow: "shadow-cyan-500/30"
    },
    {
      name: "Javascript",
      img: "/javascript.svg",
      color: "from-yellow-400 to-yellow-600",
      shadow: "shadow-yellow-500/30"
    },
    {
      name: "Node.JS",
      img: "/nodejs.svg",
      color: "from-green-500 to-green-700",
      shadow: "shadow-green-500/30"
    },
    {
      name: "Express.Js",
      img: "/Express-js.png",
      color: "from-gray-400 to-gray-700",
      shadow: "shadow-gray-500/30"
    },
    {
      name: "MongoDB.Js",
      img: "/mongodb.svg",
      color: "from-green-400 to-green-700",
      shadow: "shadow-green-500/30"
    },
    {
      name: "HTML",
      img: "/html.svg",
      color: "from-orange-500 to-red-600",
      shadow: "shadow-orange-500/30"
    },
    {
      name: "CSS",
      img: "/css.svg",
      color: "from-blue-400 to-blue-700",
      shadow: "shadow-blue-500/30"
    },
    {
      name: "TailwindCSS",
      img: "/tailwind-css.svg",
      color: "from-cyan-400 to-blue-600",
      shadow: "shadow-cyan-500/30"
    },
    {
      name: "Figma",
      img: "/figma.svg",
      color: "from-purple-400 to-pink-600",
      shadow: "shadow-purple-500/30"
    },
    {
      name: "C++",
      img: "/c.svg",
      color: "from-blue-400 to-blue-800",
      shadow: "shadow-blue-500/30"
    },
    {
      name: "JAVA",
      img: "/java.svg",
      color: "from-red-500 to-red-700",
      shadow: "shadow-red-500/30"
    },
    {
      name: "MYSQL",
      img: "/mysql.svg",
      color: "from-blue-400 to-blue-700",
      shadow: "shadow-blue-500/30"
    },
  ]

  return (
    <>
    <section className="w-full py-14 px-4 mb-10">
      <div className="max-w-6xl mx-auto">
        <div className='w-full mt-10'>
        <div className="text-center mb-10">
          <h1 className='text-black dark:text-white text-4xl md:text-5xl font-bold mb-4'>MY SKILLS</h1>
          <div className="mx-auto mt-2 h-1 w-48 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 cursor-pointer">
          {skillsImg.map((skill, ind) => (
            <div
              key={ind}
              className={`flex flex-col items-center p-4 rounded-xl bg-white/10  border-2 border-gray-700 dark:border-white/20 bg-opacity-50 backdrop-blur-sm  transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${skill.shadow} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className='w-12 h-20 object-contain filter drop-shadow-md' 
              />
              <p className="text-gray-700 dark:text-white font-medium text-lg text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>  
      </div>
      </div>
    </section>

    </> 
  )
}

export default Skills


