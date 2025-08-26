import { FileText, Mail, Smartphone, User } from 'lucide-react';
import React, { useState } from 'react'

const ContactUs = () => {

  const [userDetail, setUserDetail] = useState({
    userName: "",
    userEmail: "",
    userSubject: "",
    userMessage: "",
  });

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({ ...prev, [name]: value }))
  }

  const submitHandle = (e) => {
    e.preventDefault();
    if (userDetail.userName && userDetail.userEmail && userDetail.userMessage) {
      alert("Your message was successfully sent!")
      setUserDetail({
        userName: "",
        userEmail: "",
        userSubject: "",
        userMessage: "",
      })
    }else{
      alert("Please fill in all required fields");
    }
  }

  return (
    <>
      <section className="w-full py-15 px-4 mb-10">
        <div className='text-center mb-10'>
          <h1 className='text-black dark:text-white text-4xl md:text-5xl font-bold mb-4'>CONTACT ME</h1>
          <div className="mx-auto mt-2 h-1 w-48 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities and creative projects.
          </p>
        </div>
        <div className='flex justify-center'>
          <form onSubmit={submitHandle} className="dark:bg-neutral-800/70 backdrop-blur-md  shadow-[0px_0px_6px_1px_rgba(0,_0,_0,_0.3)] border-none  border-neutral-700 rounded-2xl p-5 md:p-10 w-full max-w-3xl flex flex-col gap-8">
            <div className='flex flex-col md:flex-row gap-8 md:gap-3 m-auto w-full'>
              <div className='relative w-full'>
                <User className='absolute left-4 top-4 text-gray-700  dark:text-white opacity-30' />
                <input className='bg-gray-50  dark:bg-neutral-800 border-2 border-gray-300 dark:border-none  p-4   pl-12 pr-4 py-4 rounded-xl w-full placeholder:opacity-40 dark:text-white  placeholder:text-gray-700 dark:placeholder:opacity-30  dark:placeholder:text-white focus:outline-hidden' name='userName' value={userDetail.userName} onChange={handleSubmit} id='userId' type="text" placeholder='Enter your name' required />
              </div>
              <div className='relative w-full'>
                <Mail className='absolute left-4 top-4/13 text-gray-700  dark:text-white opacity-30' />
                <input className='bg-gray-50  dark:bg-neutral-800  border-2 border-gray-300 dark:border-none p-4 pl-13 pr-4 py-4 rounded-xl  w-full placeholder:opacity-40 dark:text-white  placeholder:text-gray-700 dark:placeholder:opacity-30 dark:placeholder:text-white  focus:outline-hidden' name='userEmail' value={userDetail.userEmail} onChange={handleSubmit} id='userEmail' type="email" placeholder='Enter your email' required />
              </div>
            </div>
            <div className='relative m-auto w-full'>
              <FileText className='absolute left-4 top-4/13 text-gray-700  dark:text-white opacity-30' />
              <input className='bg-gray-50  dark:bg-neutral-800  border-2 border-gray-300 dark:border-none p-4 pl-12  rounded-xl w-full placeholder:opacity-40 dark:text-white placeholder:text-gray-700 dark:placeholder:opacity-30  dark:placeholder:text-white  focus:outline-none' name='userSubject' value={userDetail.userSubject} onChange={handleSubmit} id='userSubject' type="text" placeholder='Enter your subject' />
            </div>
            <div className='relative m-auto w-full'>
              <FileText className='absolute left-4 top-4/32 text-gray-700  dark:text-white opacity-30' />
              <textarea className=' bg-gray-50  dark:bg-neutral-800  border-2 border-gray-300 dark:border-none p-4 pl-13 rounded-2xl w-full placeholder:opacity-40 dark:text-white  placeholder:text-gray-700 dark:placeholder:opacity-30 dark:placeholder:text-white focus:outline-none' rows={4} name='userMessage' value={userDetail.userMessage} onChange={handleSubmit} id="userMessage" placeholder='Write your message' required></textarea>
            </div>
            <div className='flex justify-center'>
              <button className='w-40 h-10 text-white rounded-xl bg-red-600 hover:bg-red-700 cursor-pointer' onClick={submitHandle}>SUBMIT</button>
            </div>
          </form>
        </div>

      </section>
    </>
  )
}

export default ContactUs
