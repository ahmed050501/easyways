import React from 'react'
import img from "./file10.jpeg"
import img2 from "./file3.jpeg"


import { Link } from "react-router-dom";

function Div1() {
   
  return (
      <>
   
    {/* <div className="w-full h-[4rem] bg-black rounded-lg ">
      <nav className='flex text-white float-right py-4  list-none mr-8 '>
   
        <li>
      <Link to="/" className='pr-2'>
            Home
            </Link>
            </li>
            <li>
            <Link to="/About" className='pr-2'>
              About us
            </Link>
            </li>
            <li>
            <Link to="/contact" className='pr-2'>
              Contact us
            </Link>
            </li>
       <li >
            <Link to="/driver" className='pr-2'>
            Become a driver
            </Link>
            </li>
     </nav>
    </div> */}
  
    <div className='justify-center text-center text-3xl bg-blue-100 w-full h-[6rem]  mt-0'><h1 className=' py-7  bg-slate-600'>Hire Vehicle <span className=' text-black  bg-yellow-600 '>ACCORDING YOUR NEED</span></h1></div>
    <div className='w-full h-[26rem] bg-slate-100 flex'>
      <div className='w-[25%] h-[20rem] bg-blue-200'>
        <img src={img}alt='img1' className='h-[90%]'/>
        <div className='bg-black'>
        <button type='button' className='rounded-md border-solid border-2 border-black hover:bg-violet-600 w-[7rem] bg-white py-[0.2rem]'> <Link to="/div2" className='pr-2'>
            Book bike
            </Link></button></div>
      </div>
      <div className='w-[25%] h-[20rem] bg-blue-200'><img src={img2}alt='img1' className='w-[150%] h-[90%]'/> <div className='bg-black'>
      <button className='rounded-md border-solid border-2 border-black hover:bg-violet-600  bg-white py-[0.2rem] w-[12rem]' > <Link to="/div3" >
           Book city vehicle
            </Link></button></div></div>
      <div className='w-[25%] h-[20rem] bg-blue-200'><img src="https://truckguru.co.in/truck-images/tataace.jpg"alt='img1' className='h-[90%]'/> <div className='bg-black'>
      <button className='rounded-md border-solid border-2 border-black w-[7rem] hover:bg-violet-600 bg-white py-[0.2rem]'> <Link to="/div4">
          Book tata-Ace
            </Link></button></div></div>
      <div className='w-[25%] h-[20rem] bg-blue-200'><img src="https://truckguru.co.in/truck-images/eicher-19feet.jpg"alt='img1' className='h-[90%]'/> <div className='bg-black'><button className='rounded-md border-solid border-2 border-black hover:bg-violet-600  w-[7rem] bg-white py-[0.2rem]'><Link to="/div5">
          book icer
            </Link></button></div></div>
    </div>
   
    </>
  )
}

export default Div1