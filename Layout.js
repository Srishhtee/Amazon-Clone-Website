import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import NavbarPanel from "./NavbarPanel"
import { Outlet, ScrollRestoration } from 'react-router-dom'
function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Header/>
      <NavbarPanel/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default Layout
