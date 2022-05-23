import {React, useState} from 'react'
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import Form from './Form';
import axios from 'axios';
import "./Driver.css";
function Driver() {
  let name, value;

const [city, setcity] = useState("");
const [vehicle, setvehicle] = useState("");
const [user, setUser] = useState({
  name:"",phone:"",city:"",vehicle:""
});

const [fileInputState, setFileInputState] = useState('');
const [previewSource, setPreviewSource] = useState('');
const [selectedFile, setSelectedFile] = useState();
const [successMsg, setSuccessMsg] = useState('');
const [errMsg, setErrMsg] = useState('');
const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
};

const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setPreviewSource(reader.result);
    };
};

const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
        uploadImage(reader.result);
    };
    reader.onerror = () => {
        console.error('AHHHHHHHH!!');
        setErrMsg('something went wrong!');
    };
};
const uploadImage =  (base64EncodedImage) => {
  // try {
  //     await fetch('/api/upload', {
  //         method: 'POST',
  //         body: JSON.stringify({ data: base64EncodedImage }),
  //         headers: { 'Content-Type': 'application/json' },
  //     });
  //     setFileInputState('');
  //     setPreviewSource('');
  //     setSuccessMsg('Image uploaded successfully');
  // } catch (err) {
  //     console.error(err);
  //     setErrMsg('Something went wrong!');
  // }
  axios.post('http://localhost:8080/api/upload',{  data: base64EncodedImage })
  .then(res=>console.log("postdata",res)).catch(err=> console.log(err))

};
// const cityinputs=(e)=>{
//   e.target.value
//   setcity(e.target.value)
// }
// const vehicleinputs=(e)=>{
//   e.target.value
//   setvehicle(e.target.value)
// }
const handleinputs = (e) =>{
  console.log(e);
  name=e.target.name
  value = e.target.value
  setUser({...user, [name]:value});
}

const postData =(e)=>{
  // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  // headers.append('Access-Control-Allow-Credentials', 'true');
  e.preventDefault();
  const {name,phone,city,vehicle} =user;
 
  axios.post('http://localhost:8080/driver',{ 
    name,phone,city,vehicle
   
      })
  .then(res=>console.log("postdata",res)).catch(err=> console.log(err))
}


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
            <Link to="/" className='pr-2'>
            Become a driver
            </Link>
            </li>
     </nav>
    </div>
 <div className='imagediv w-full h-[60rem] bg-slate-300 grid justify-items-center'>  
 <form onSubmit={handleSubmitFile} className="form float-right bg-white h-[10rem] mt-[6rem] w-[22rem]">
 <h1 className='text-black text-2xl ' >Attach Vehicle Now</h1><br/>
 <h1>attach vehicle image</h1>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="w-[18rem] h-[2.5rem] rounded"
                /><br/>
                <button type="submit" className='text-lg rounded text-white bg-blue-900 '>
                    Upload
                </button>
            </form>
       <div className='mt-[-22rem] w-[22rem]'>
                <form  method ="POST"  className='bg-white ' >

   
    <input type="text" name="name" placeholder='Name'    onChange ={handleinputs}value={user.name} className='text-left  w-[18rem] h-[2.5rem] rounded' required="required"/><br/>
    <input type="text" name='phone' value={user.phone}   onChange ={handleinputs} className='w-[18rem]  h-[2.5rem]  rounded     'placeholder=' Enter mobile number ' required="required"/><br/>
    <input type="text" name='city' placeholder='city'  className='text-left  w-[18rem] h-[2.5rem] rounded'    onChange={handleinputs} value={user.city}/><br/>
<input type="text" name='vehicle' placeholder='vehicle'  className='text-left  w-[18rem] h-[2.5rem] rounded'    onChange={handleinputs} value={user.vehicle}/><br/>
 <button type='submit' className='bg-blue-500 w-[20rem] h-[3rem]  ' onClick={postData}>  <Link to="/form">
            REGISTER
            </Link></button>
 </form>
 </div> 
 </div> 
<div className="bg-gray-100 w-full h-[30rem] mt-56 ">
  <p className='text-center text-blue-500'>WHY CHOOSE US?</p>
  <h3 className='text-center my-6 text-[2.2rem] italic font-bold font-mono py-2'>Maximize earnings, faster <br/>and easier than ever before! <br/>You are just a click away.</h3>
  <div className='flex  ml-44 mt-12'>
  <div className='bg-[#f9fafa] w-[28%] h-[14rem] ml-2  px-2 '>
    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTIwIDVjLTMuMzE0IDAtNiAzLjEzNC02IDdzMi42ODYgNyA2IDcgNi0zLjEzMyA2LTctMi42ODYtNy02LTd6bTIuNSAxMC41YS41LjUgMCAwMS0uNS41aC00YS41LjUgMCAwMS0uNS0uNXYtMWEuNS41IDAgMDEuNS0uNWgxdi0zLjQ2NWwtLjAyOS4wMTlhLjUuNSAwIDAxLS42OTMtLjEzOWwtLjU1NS0uODMyYS41LjUgMCAwMS4xMzktLjY5M2wuOTU4LS42MzlBMS41IDEuNSAwIDAxMTkuNjUxIDhoLjg0OWEuNS41IDAgMDEuNS41VjE0aDFhLjUuNSAwIDAxLjUuNXpNMzggMEgyYTIgMiAwIDAwLTIgMnYyMGEyIDIgMCAwMDIgMmgzNmEyIDIgMCAwMDItMlYyYTIgMiAwIDAwLTItMnptLTEgMTdhNCA0IDAgMDAtNCA0SDdhNCA0IDAgMDAtNC00VjdhNCA0IDAgMDA0LTRoMjZhNCA0IDAgMDA0IDR6IiBmaWxsPSIjMTA5NGY4Ii8+PC9zdmc+' className='w-[40px] h-[24px] mt-3 ml-2'/>
    <h1 className='text-2xl mt-4 ml-6 font-normal'>Instant pay</h1>
    <p className='mt-3 text-lg text-[#545454]'>Delayed payments have never been our thing! Paperless invoices, constant communication {"&"} consistent support.</p>
  </div>
  <div className='bg-[#f9fafa] w-[28%] h-[14rem] ml-2 px-2'>
    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTIuMzU0IDE3LjYwNmEuNzUyLjc1MiAwIDAwLjkxOS41M2wxMC4xNDQtMi43MTlhLjc1Mi43NTIgMCAwMC41My0uOTE5bC0yLjMzLTguN2EuNzUyLjc1MiAwIDAwLS45MTktLjUzbC0zLjYxOS45NzUgMS4xNjIgNC4zNTEtMi45Ljc3My0xLjE1OS00LjM0NS0zLjYyMy45N2EuNzUyLjc1MiAwIDAwLS41My45MTlsMi4zMjUgOC43ek0xOC4wMDEgMGExLjUgMS41IDAgMDAtMS41IDEuNXYxNS4xNjlMLjI3NyAyMS4wOTRhLjM3My4zNzMgMCAwMC0uMjYyLjQ1OWwuNTg2IDIuMTdhLjM3My4zNzMgMCAwMC40NTkuMjYzbDE4LjQ1NS01LjAzNGE1LjI0NCA1LjI0NCAwIDAwMTAuNDg2LS4yMDJWMHptNi43NSAyMWEyLjI1IDIuMjUgMCAxMTIuMjUtMi4yNUEyLjI1MSAyLjI1MSAwIDAxMjQuNzUgMjF6IiBmaWxsPSIjMTA5NGY4Ii8+PC9zdmc+' className='w-[30px] h-[24px]'/>
    <h1 className='text-2xl mt-4 ml-6 font-normal'>Instant loads</h1>
    <p className='mt-3 text-lg text-[#545454]'>A free download from iOS or android takes you to instant bookable loads. It is as simple as- match, accept & get working!</p>
  </div>
  <div className='bg-[#f9fafa] w-[28%] h-[14rem]  ml-2 px-2'>
    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTIxLjQyOSAwSDIuNTcxQTIuNTcxIDIuNTcxIDAgMDAwIDIuNTcxdjE4Ljg1OEEyLjU3MSAyLjU3MSAwIDAwMi41NzEgMjRoMTguODU4QTIuNTcxIDIuNTcxIDAgMDAyNCAyMS40MjlWMi41NzFBMi41NzEgMi41NzEgMCAwMDIxLjQyOSAwek01LjAzNiAyMC41NzFhLjguOCAwIDAxLS43ODMtLjYyM2wtLjgtMy40ODJhLjguOCAwIDAxLjQ2Ni0uOTE5bDMuNzUtMS42MDdhLjguOCAwIDAxLjkzOC4yM2wxLjY2MSAyLjAzYTEyLjQyIDEyLjQyIDAgMDA1LjkzMi01LjkzNUwxNC4xNyA4LjZhLjguOCAwIDAxLS4yMy0uOTM4bDEuNjA3LTMuNzVhLjguOCAwIDAxLjkxOS0uNDY2bDMuNDgyLjhhLjguOCAwIDAxLjYyMy43ODNBMTUuNTM1IDE1LjUzNSAwIDAxNS4wMzYgMjAuNTcxeiIgZmlsbD0iIzEwOTRmOCIvPjwvc3ZnPg==' className='w-[24px] h-[24px]'/>
    <h1 className='text-2xl mt-4 ml-6 font-normal'>Constant support</h1>
    <p className='mt-3 text-lg text-[#545454]'>You lead from start to finish while our team is available to lend a helping hand (8349455105) 24X7.</p>
  </div>
</div>
</div>
  <div className=' w-full  ml-8 h-[50rem] mt-[12rem]   flex'>
  <div className=' bg-[#f9fafa] ml-[6rem] mt-[2.2rem] w-[25%] h-[10rem]'> 
  <h1 className='text-2xl mt-4 ml-6 font-bold'>Match</h1>
  <p>The Eazyway instantly connects<br/> you to the available loads.</p>
  </div><br/>
  <div className=' bg-[#f9fafa] mt-6 ml-3  w-[25%] h-[10rem]'>  <h1 className='text-2xl mt-4 ml-6 font-bold'>Track</h1>
  <p>Track your journey, details of the clients, {"&"} be ready for offload or <br/>onload. Manage all your work with just a few clicks.</p>
  </div><br/>
  <div className=' bg-[#f9fafa] mt-[2rem] ml-[4rem] w-[25%]  h-[10rem]'> <h1 className='text-3xl mt-4 ml-6 font-bold'>Make the payment</h1>
  <p>With our UI {"&"} a wide consumer base, analyze the efficiencies of your fleet<br/> and identify opportunities to succeed. Speed through<br/> processing with paperless invoices, PODs and BOLs.</p>
  </div><br/>
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

export default Driver