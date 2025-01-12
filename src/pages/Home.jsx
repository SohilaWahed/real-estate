import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import Counter from '../component/Counter';
import Rate from '../component/Rate';
import img1 from '../assets/images/img1.avif'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.avif'
import img10 from '../assets/images/img10.avif'
import img11 from '../assets/images/img11.avif'
import img13 from '../assets/images/img13.avif'
import img14 from '../assets/images/img14.avif'
import img15 from '../assets/images/img15.jpg'
import img16 from '../assets/images/img16.jpg'
import img17 from '../assets/images/img17.avif'
import img18 from '../assets/images/img18.webp'


export default function Home() {

  const [typeOfPay, setTypeOfPay] = useState('')
  const [typeOfHouse, setTypeOfHouse] = useState('')
  const [city, setCity] = useState('')
  const houses = [
    {
      image: img1,
      type: "Modern House",
      price: "$39,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    },
    {
      image: img14,
      type: "Luxury House",
      price: "$42,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    },
    {
      image: img3,
      type: "Classic House",
      price: "$52,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    },
    {
      image: img4,
      type: "Modern House",
      price: "$39,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    },
    {
      image: img5,
      type: "Luxury House",
      price: "$42,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    },
    {
      image: img6,
      type: "Classic House",
      price: "$52,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    },
    {
      image: img7,
      type: "Modern House",
      price: "$39,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    },
    {
      image: img8,
      type: "Luxury House",
      price: "$42,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    },
    {
      image: img9,
      type: "Classic House",
      price: "$52,000",
      bedrooms: 5,
      bathrooms: 2,
      area: "285m²",
    }
  ]
  const counters = [
    { name: 'Rent House', target: 6675, step: 267 },
    { name: 'State', target: 25, step: 25 },
    { name: 'Buy Home', target: 2050, step: 81 },
    { name: 'Agents', target: 300, step: 25 }
  ]
  const helpings = [
    {
      icon: 'fa-layer-group',
      header: 'Find Out How Much You Can Afford',
      content: 'A property description is the written portion of a real listing',
      link: 'listings'
    },
    {
      icon: 'fa-message',
      header: 'Understand Your Monthly Costs',
      content: 'A property description is the written portion of a real listing',
      link: 'listings'
    },
    {
      icon: 'fa-layer-group',
      header: 'Get Help With Your Down Payment',
      content: 'A property description is the written portion of a real listing',
      link: 'listings'
    }]
  const services = [
    {image:img15 , name: 'Expert Buyer Representation', link: 'services' },
    {image:img17 , name: 'Tailored Rent      Services', link: 'service' },
    {image:img16 , name: 'Seamless Seller Representation', link: 'services' },
    {image:img18 , name: 'Expert Buyer Representation', link: 'services' },
    {image:img15 , name: 'Seamless Seller Representation', link: 'services' },
    {image:img17 , name: 'Expert Buyer Representation', link: 'services' },
    {image:img16 , name: 'Tailored Rent Services', link: 'service' },
    {image:'src/assets/images/img18.webp' , name: 'Seamless Seller Representation', link: 'services' },

  ]
  const clients = [
    {
      name: 'Sohila Wahed',
      img: '',
      job: 'Enterptise District Manager',
      msg: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem ducimus deleniti soluta nam, iure rerum suscipit eaque dolore aliquam`,
      rate: 5
    },
    {
      name: 'Farouk adel',
      img: '',
      job: 'Enterptise District Manager',
      msg: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem ducimus deleniti soluta nam, iure rerum suscipit eaque dolore aliquam`,
      rate: 4.5
    },
    {
      name: 'ALiaa Mahrous',
      img: '',
      job: 'Enterptise District Manager',
      msg: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem ducimus deleniti soluta nam, iure rerum suscipit eaque dolore aliquam`,
      rate: 4.5
    },
    {
      name: 'Kareem Othman',
      img: '',
      job: 'Enterptise District Manager',
      msg: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem ducimus deleniti soluta nam, iure rerum suscipit eaque dolore aliquam`,
      rate: 5
    },
    {
      name: 'Donia El-Said',
      img: '',
      job: 'Enterptise District Manager',
      msg: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem ducimus deleniti soluta nam, iure rerum suscipit eaque dolore aliquam`,
      rate: 4
    },
    {
      name: 'Mohmmed Hassan',
      img: '',
      job: 'Enterptise District Manager',
      msg: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem ducimus deleniti soluta nam, iure rerum suscipit eaque dolore aliquam`,
      rate: 4.55
    }
  ]
  
  return (

    <>
      {/* first section */}
      <div className={`h-96 mt-20 mb-4 w-full rounded-[25px] bg-[url('src/assets/images/img12.jpg')] md:bg-[url('src/assets/images/img13.avif')] md:bg-left-bottom lg:bg-center bg-cover flex flex-col items-center relative`}>
        <p className='text-white text-4xl text-center font-black absolute top-1/3'>Find Your Dream <br /> Living Room</p>
        <div className='py-4 px-4 shadow rounded-full w-3/4 bg-white flex justify-around items-center flex-wrap md:flex-nowrap gap-2 absolute bottom-0 translate-y-2/4 '>
          <select
            id="optionsPay"
            value={typeOfPay}
            onChange={(e) => setTypeOfPay(e.target.value)}
            className="bg-transparent w-40 md:w-1/4 px-4 py-2 border border-primary-lightGray rounded-full shadow-sm outline-none "
          >
            <option value="option1">For Rent</option>
            <option value="option2">For ...</option>
            <option value="option3">For ...</option>
          </select>

          <select
            id="optionsType"
            value={typeOfHouse}
            onChange={(e) => setTypeOfHouse(e.target.value)}
            className="bg-transparent w-40 md:w-1/4 px-4 py-2 border border-primary-lightGray rounded-full shadow-sm outline-none "
          >
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="compound">compound</option>
          </select>


          <select
            id="optionsCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent w-40 md:w-1/4 px-4 py-2 border border-primary-lightGray rounded-full shadow-sm outline-none "
          >
            <option value="cairo">Cairo</option>
            <option value="alex">Alex</option>
            <option value="sohag">Sohag</option>
          </select>

          <div className='bg-primary w-40 md:w-1/4 px-4 py-2 text-white text-center rounded-full'>
            Find Propetry
          </div>
        </div>
      </div>

      {/* second section (Houses) */}
      <div className='mt-32 sm:mt-24 md:mt-20 lg:mt-14 overflow-visible'>
        <div className='pb-8 flex justify-between items-center'>
          <h2 className='text-3xl font-bold'>Best Residence From  <br /> Us For You</h2>
          <p className='text-sm text-gray-600 text-Bold'>
            Real estate is property consisting of land <br />
            and the buildings on it, along with its such <br />
            as growing crops minerals.
          </p>
        </div>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          className='py-8'
        >
          {houses.map((house, index) =>
            <SwiperSlide key={index} className='custom-slide'>
              <div className='house rounded-3xl'>
                <div className='h-80 bg-primary rounded-3xl'>
                <img src={house.image} alt={house.type} className='w-full h-full rounded-3xl object-cover' />
                </div>
                <div className='py-3 font-bold flex justify-between items-center gap-2'>
                  <div>
                    <h3 className='text-xl'> {house.type}</h3>
                    <div className='flex gap-1 text-[12px]'>
                      <div className='flex flex-col'>
                        <span><i className="fa-solid fa-house"></i> {house.bedrooms}</span>
                        <span >Bedrooms</span>
                      </div>
                      <div className='flex flex-col'>
                        <span><i className="fa-solid fa-bath"></i> {house.bathrooms}</span>
                        <span >Bathrooms</span>
                      </div>
                      <div className='flex flex-col'>
                        <span><i class="fa-regular fa-square"></i> {house.area}</span>
                        <span >Lining Area</span>
                      </div>
                    </div>
                  </div>
                  <div className='px-2 py-1 rounded-full bg-primary-meduim '>$42000 </div>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* third section (Counters) */}
      <div className='border-y-[1px] mt-3 py-3 border-gray-600 flex justify-between items-center'>
        {counters.map((counter, index) =>
          <div key={index} className='flex flex-col'>
            <span className='text-gray-700 font-bold'>{counter.name}</span>
            <Counter targetNumer={counter.target} step={counter.step} />
          </div>
        )}
      </div>

      {/* fourth section */}
      <div className='py-6 mt-4 flex gap-4'>
        <div className='w-1/2 h-80 p-8 rounded-3xl flex flex-col justify-between bg-primary-meduim'>
          <h2 className='font-bold text-xl'>Real Estate is Real <br /> Property that Consists of Land</h2>
          <div>SEE ALL <Link to={'projects'} className='px-2 py-1 m-3 rounded-full text-white bg-primary'><i class="fa-solid fa-arrow-right"></i></Link> </div>
        </div>
        <div className='w-1/2 flex gap-4'>
          <div className='w-full md:w-1/2 h-80 rounded-3xl  bg-primary'>
            <img src={img2} alt="" className='rounded-3xl object-cover object-center h-full' />
          </div>
          <div className='hidden md:block w-1/2 h-80 rounded-3xl bg-primary '>
            <img src={img10} alt="" className='rounded-3xl h-full object-cover' />
          </div>
        </div>
      </div>

      {/* fifth section (Help) */}
      <div>
        <h2 className='text-center py-4 text-4xl font-bold'>How We Can Help You</h2>
        <div className='py-6 flex items-center justify-center gap-8'>
          <div className='hidden md:block w-1/2 h-80 bg-primary rounded-3xl'>
            <img src={img11} alt="" className='rounded-3xl object-cover w-full h-full' />
          </div>
          <div className='md:w-1/2'>
            {helpings.map((help, index) => <div key={index} className='border-b-[2px] border-gray-500 py-3 flex gap-3'>
              <div>
                <div className='p-2 bg-black rounded-full text-sm text-gray-200'>
                  <i className={`fa-solid ${help.icon}`}></i>
                </div>
              </div>
              <div>
                <p className='font-bold pb-2 '>{help.header}</p>
                <p>{help.content}</p>
              </div>
              <div className='content-end'>
                <Link to={help.link} className='border-[1px] border-gray-500 px-4 rounded-full'>
                  <i class="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>)}
          </div>
        </div>
      </div>

      {/* sixth section */}
      <div className='h-[400px] rounded-3xl mt-4 px-4 py-12 bg-primary flex items-center gap-4'>
        <div className='w-2/3 text-white'>
          <h2 className='text-2xl font-bold'>Real estate is property consisting of land</h2>
          <p className='text-sm my-3 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem ducimus deleniti soluta nam, iure rerum suscipit eaque dolore aliquam, cum laboriosam,
            quae dolor odit laudantium ullam similique dicta modi impedit in quis non debitis maxime quam?
            Earum cupiditate doloribus totam?</p>
          <p className='text-xl mb-3'>Community collection</p>
          <p className='text-xl'>Building a Lucrative Portfolio</p>
        </div>
        <div className='w-1/3 h-[300px]'>
          <img src={img13} alt="" className='rounded-3xl object-cover w-full h-full' />
        </div>
      </div>

      {/* Seventh section (services) */}
      <div className='py-12'>
        <h2 className='text-4xl font-bold'>OurTailored Services</h2>
        <div className='relative py-12'>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-1",
              prevEl: ".swiper-button-prev-1",
            }}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className='overflow-visible'
          >
            {services.map((service, index) =>
              <SwiperSlide key={index}>
                <div key={index} className='h-80 w-full bg-primary rounded-2xl relative flex justify-center'>
                  <img src={service.image} alt={service.name} className='w-full h-full rounded-2xl object-cover' />
                  <div className='bg-white w-10/12 p-4 rounded-2xl absolute bottom-5 flex justify-between items-start gap-4 '>
                    <p>{service.name}</p>
                    <div className='content-start'>
                      <Link to={service.link} className='p-2 rounded-full bg-primary-meduim'><i class="fa-solid fa-arrow-right custom-rotate"></i></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
          <div className='flex gap-4 absolute bottom-0 right-3 z-10'>
            <div className="swiper-button-prev-1 p-2 text-center  rounded-full cursor-pointer border-[1px] border-gray-500"
              style={{ width: "40px", height: "40px" }}>
               <i className="fa-solid fa-arrow-left-long text-primary"></i>
            </div>
            <div className="swiper-button-next-1 p-2 text-center rounded-full cursor-pointer border-[1px] border-gray-500"
              style={{ width: "40px", height: "40px" }}>
                <i className="fa-solid fa-arrow-right text-primary"></i>
            </div>
          </div>
        </div>
      </div>

      {/* eighth section (clients) */}
      <div className='py-8'>
        <h2 className='text-center py-4 text-4xl'>What Our Clients Say?</h2>
        <div className='relative py-12'>
          <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-2",
            prevEl: ".swiper-button-prev-2",
          }}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className='overflow-visible'
          >
            {clients.map((client, index) =>
              <SwiperSlide key={index}>
                <div className='p-5 bg-primary-light rounded-2xl'>
                  <Rate rate={client.rate} />
                  <p className='py-5'>{client.msg}</p>
                  <div className='flex items-center gap-3'>
                    <div className='rounded-full w-16 h-16 bg-primary'></div>
                    <div className='text-sm'>
                      <div className='font-bold'>{client.name}</div>
                      <div>{client.job}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
          <div className='flex gap-4 absolute bottom-0 left-1/2 -translate-x-1/2'>
            <div className="swiper-button-prev-2 p-2 text-center  rounded-full cursor-pointer border-[1px] border-gray-500"
              style={{ width: "40px", height: "40px" }}>
               <i className="fa-solid fa-arrow-left-long text-primary"></i>
            </div>
            <div className="swiper-button-next-2 p-2 text-center  rounded-full cursor-pointer border-[1px] border-gray-500"
              style={{ width: "40px", height: "40px" }}>
                <i className="fa-solid fa-arrow-right text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
