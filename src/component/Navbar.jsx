import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='bg-primary-screen py-3  flex justify-between items-center flex-wrap lg:hidden  fixed top-0 left-0 right-0 px-4 z-20'>
        <Link to={'/'} className='pe-2 text-3xl font-black text-primary' >Estate</Link>
        <div className='bg-primary-lightGray w-60 flex justify-center items-center rounded-full'>
          <input type="text" className='bg-transparent px-4 py-2 outline-none' placeholder='search' />
          <i className="fa-solid fa-search w-10 text-balck"></i>
        </div>
        <i className="fa-solid fa-bars text-black text-2xl cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}></i>
        <div className={`fixed top-14 right-0 w-64 h-full bg-primary-screen p-4 text-gray-700 transition-transform transform
         ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ transitionDuration: '300ms' }}>
          <ul className='font-bold flex flex-col'>
            <NavLink to={'about'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600' >About us</NavLink>
            <NavLink to={'projects'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600'>Projects</NavLink>
            <NavLink to={'agents'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600'>Agents</NavLink>
            <NavLink to={'services'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600'>Services</NavLink>
            <NavLink to={'listings'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600'>Listings</NavLink>
            <NavLink to={'contact'} className='pe-2 py-2 hover:text-primary'>Contact us</NavLink>
          </ul>
        </div>
        {/* {isOpen && 
        <div className='bg-primary-screen w-full'>
          <ul className='font-bold flex flex-col'>
          <NavLink to={'about'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600' >About us</NavLink>
          <NavLink to={'projects'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600'>Projects</NavLink>
          <NavLink to={'agents'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600'>Agents</NavLink>
          <NavLink to={'services'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600'>Services</NavLink>
          <NavLink to={'listings'} className='pe-2 py-2 hover:text-primary border-b-[1px] border-gray-600'>Listings</NavLink>
          <NavLink to={'contact'} className='pe-2 py-2 hover:text-primary'>Contact us</NavLink>
        </ul>
        </div> } */}
      </div>
      <div className='bg-primary-screen hidden lg:flex justify-between items-center h-16 fixed top-0 left-2 right-2 md:right-4 md:left-4 lg:right-6 lg:left-6 xl:right-8 xl:left-8 z-20 '>
        <Link to={'/'} className=' w-1/4 pe-2 text-3xl font-black text-primary' >Estate</Link>
        <div className='w-3/4 flex justify-between items-center'>
          <ul className='font-bold'>
            <NavLink to='about' className='pe-5 hover:text-primary' >About us</NavLink>
            <NavLink to={'projects'} className='pe-5 hover:text-primary'>Projects</NavLink>
            <NavLink to={'agents'} className='pe-5 hover:text-primary'>Agents</NavLink>
            <NavLink to={'services'} className='pe-5 hover:text-primary'>Services</NavLink>
            <NavLink to={'listings'} className='pe-5 hover:text-primary'>Listings</NavLink>
          </ul>
          <div className='bg-primary-lightGray w-60 flex justify-center items-center rounded-full'>
            <input type="text" className='bg-transparent px-4 py-2 outline-none' placeholder='search' />
            <i className="fa-solid fa-search w-10 text-balck"></i>
          </div>
          <Link to={'contact'} className='bg-primary text-white text-center  px-4 py-2 rounded-full'>
            Contact us
          </Link>
        </div>
      </div>
    </>
  )
}