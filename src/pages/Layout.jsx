import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (<>
    <div className='custom-padding'>
      <Navbar />
      <Outlet />
    </div>
    <Footer />
  </>
  )
}
