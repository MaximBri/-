import React from 'react'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      { screenWidth >= 1400 && <Header />}
      { screenWidth < 1400 && <HeaderMobile />}
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
