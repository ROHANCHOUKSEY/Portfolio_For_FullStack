import React, { useContext, useEffect } from 'react'
import Navbar from './Component/Navbar'
import { ThemeContext } from './ThemeContext/ContextProvider'
import About from './Component/PortfolioContent/About';
import AllContent from './Component/PortfolioContent/AllContent';

const App = () => {

  const{screenMode} = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(screenMode);
  }, [screenMode]);

  return (
    <>
      <Navbar/>
      <AllContent/>
    </>
  )
}

export default App