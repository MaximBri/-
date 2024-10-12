import React from 'react'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  // console.log('MainLayout update...')
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      {screenWidth >= 1440 ? <Header /> : <HeaderMobile />}
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
