import {React,useState} from 'react'
import { Link } from "react-router-dom";

function Dialog() {
    const [open, setopen] = useState(true);
  return (
      <>
     {
         open ?
    <div className='grid justify-items-center'>
        
        <div className='bg-blue-800 w-[35rem] h-[30rem] rounded '>
            <p className='text-2xl text-blue-200 mt-12 text-center '>your booking is confirmed</p>
            <p className='text-center mt-[6rem] text-4xl italic hover:not-italic'> Our Driver will call you in few minutes </p>
            <p className='text-center'>💕❤✔🙏</p>
            <button type='submit' className='rounded hover:bg-red-400 text-lg font-bold bg-black text-blue-800 w-[6rem] ml-[16rem] content-center mt-[10rem]  ' onClick={()=>{setopen(false)}}> <Link to="/login" >
             ❌ Cancel
            </Link></button>
        </div>
    </div>:null
}
    </>
  )
}

export default Dialog