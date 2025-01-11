import React from 'react'

export default function Footer() {
  return (
    <div className='custom-padding py-10 bg-black'>
      <div className='py-4 border-b-[1px] border-gary-500 md:flex items-start gap-16 text-gray-100'>
        <div>
          <h2 className='text-3xl lg:text-4xl font-gilroy-bold'>Ready To Work With Us</h2>
          <p className='text-gray-600 text-sm py-1'>we had the pleasure of working with Craig from Greenwll
            from the joe Hayden Real Estate Team and he was fantastic! We are
          </p>
        </div>
        <p className='py-3 text-sm'>We had the pleasure of working with Craig Greenwall
          <br />from the joe Hayden Real Estate Team and he was fantastic! We are
        </p>
      </div>
      <div className='py-6 lg:flex items-start gap-96 font-bold text-gray-500'>
        <div>
          <h3 className='text-2xl md:text-3xl font-gilroy-bold text-gray-100'>Home</h3>
          <p className='py-3 text-sm'>We had the pleasure of working with Craig Greenwall
            <br />from the joe Hayden Real Estate Team and he was fantastic! We are
          </p>
          <div className='my-3 py-3 ps-8 pe-3 rounded-full border-[1px] border-gray-200 flex justify-between'>
            <input type="text" placeholder='Write your email here' className='bg-inherit' />
            <div className='p-2 font-bold bg-primary-meduim rounded-full cursor-pointer text-black flex items-center'>
              Submit
              <i className="px-2 fa-solid fa-arrow-right text-primary"></i>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center gap-14'>
          <ul className='cursor-pointer'>
            <li className='py-1 text-gray-100'>Home</li>
            <li className='py-1'>About Us</li>
            <li className='py-1'>Collection</li>
            <li className='py-1'>Blog</li>
          </ul>
          <ul className='cursor-pointer'>
            <li className='py-1  text-gray-100'>Security</li>
            <li className='py-1'>Privacy Policy</li>
            <li className='py-1'>User Agreements</li>
            <li className='py-1'>Copyright</li>
          </ul>
          <ul className='cursor-pointer'>
            <li className='py-1  text-gray-100'>Social Media</li>
            <li className='py-1'>Instgram</li>
            <li className='py-1'>Facebook</li>
            <li className='py-1'>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
