import React from 'react'
import { Link } from "react-router-dom";
import instagram from "./instagram.png";
function Contact() {
  return (
   <>
    <div className="w-full h-[4rem] bg-black rounded-lg ">
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
    </div>
    <div className='flex mt-[20rem]'>
  <div className=' w-[25%] h-[12rem] ml-16 mt-4 pt-16 bg-neutral-300 text-center'>📧 CONTACT US  <br/>
   Eazyway@gmail.com</div>
  <div className=' w-[25%] h-[12rem] ml-16 mt-4 pt-16 bg-neutral-300 text-center'>🛂 CONTACT US  <br/>
  8120763387</div>
  <div className=' w-[25%] h-[12rem] ml-16 mt-4 pt-16 bg-neutral-300 text-center'> Contact us  <br/>
  <div className='flex ml-[9rem]'>
  <img src={instagram} className=" w-[20px] h-[20px]"/>
  <a href='https://www.instagram.com/itzzz.sagar_gupta/' className='text-blue-600 ml-1'>instagram</a>
  </div></div>
  </div>


  <div  className=' footer w-full  h-[11rem]  relative mb-[0] bg-black flex p-5'>
<div  className=' w-[23%] h-[10rem] float-left   bg-slate-700  text-white   m-2 p-9 list-none  text-center'>
<li >
            <Link to="/" className='p-2'>
            Trucks in Indore
            </Link>
            </li>
            <li >
            <Link to="/" className='p-2'>
            City Tempo
            </Link>
            </li>
            <li >
            <Link to="/" className='p-2'>Porter For Enterprise
            </Link>
            </li>
            <li >
            <Link to= "/" className='p-2' >
            Packers {"&"} Movers
            </Link>
            </li>
</div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white m-2 p-9 list-none  text-center'> <li >
            <Link to="/" className='pr-2'>
              services
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              truck
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              Tata-ace
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              CITY in which we are
            </Link>
            </li>
      </div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white m-2 p-9 list-none  text-center'>  <li >
            <Link to="/" className=''>
              why we Best
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Carrier
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Drive With us
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              About us
            </Link>
            </li></div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white p-9
  m-2    list-none  text-center '>  <li >
            <Link to="/" className=''>
              why we Start this
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Fast with better
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Privacy policy
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Terms of service
            </Link>
            </li></div>

</div>
</>
  )
}

export default Contact