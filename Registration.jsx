import {React,useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import Div5 from './Div5';
import Div1 from './Div1';
import "./Registratio.css";
import logo from "./logo.jpg";





 
function Registration() {
 
  
   
 const requirement =(e)=>{
   console.log(e.target.value);
   setwhichshow(e.target.value)
   console.log(whichshow);
 }
 const [divshow, setdivshow] = useState(true);
const [indust, setindust] = useState(false);
 const [show, setshow] = useState(true);
 const [whichshow, setwhichshow] = useState("");
 let a= {whichshow};
  
 const updiv =()=>{
  if(whichshow ==="PERSONAL-PURPOSE" || whichshow=== "INDUSTRIAL-PURPOSE" ){
    setdivshow(false)
  }
  else{
    setdivshow(true)
  }
}
 useEffect(() => {
  whichshow === "PERSONAL-PURPOSE"
    ? setshow(true)
    : setshow(false);
  whichshow === "INDUSTRIAL-PURPOSE" ? setindust(true) : setindust(false);

}, [whichshow]);

  return (
   
    <>
    <div className="w-full h-[4rem] bg-black rounded-lg absolute ">
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
    <div>
      {show && <Div1 />}
      {indust && <Div5 />}
    </div>
  


{
  divshow?
    <div className=' img bg-blue-100 w-full h-[50rem] grid justify-items-center'>
      <img src={logo} className="rounded-[50%] w-[120px] h-[120px] mt-[2rem] ml-[-85rem]  "/>
      <h1 className=" text-4xl mt-[-2rem] ml-[-8rem] font-semibold ">Online Vehicle Booking By Easy-way</h1>
      <h1 className='mt-[-3rem] ml-[-16rem] text-xl  font-medium  '> Choose from requirement Section</h1>
  <select  className=' bg-[#7CE4E2] w-[8rem] h-[3rem] ml-[-16rem] rounded-[30%] mt-[-8rem] text-center' value={whichshow} onClick ={updiv} onChange={requirement}>
    
    <option value="requirement">Requirement</option>
    <option> PERSONAL-PURPOSE </option>
    <option> INDUSTRIAL-PURPOSE</option>
  </select>

</div>
:null}
<div>
<div className ="float-right w-[50%] h-[36rem] bg-white "><h1 className='text-6xl text-black mt-[10rem] '> </h1>
  <p className='mt-4 font-extrabold  font-medium   text-2xl text-black'> Choose vehicle of your choice</p>
  <p className=' text-black text-xl mt-3'> Get quotes for vehicles which can carry from<br/> 20 kgs to 2000 kgs and book instantly without any waiting
</p></div>
<div className='ml-4 '>
  <img src='https://5.imimg.com/data5/SELLER/Default/2022/2/CF/KR/NL/39803990/domestic-goods-transport-services-500x500.jpg'/>
</div>

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
  );
}

export default Registration