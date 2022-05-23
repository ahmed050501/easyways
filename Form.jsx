import React from 'react';
import { Link } from 'react-router-dom';

function Form() {
  return (
    <div className='grid justify-items-center '>
        <div className='w-[40rem] h-[25rem] bg-yellow-800'>
           <h1 className='text-white text-2xl text-center mt-12'>Your Registration is Succesfull</h1>
           <p className='text-white text-2xl text-center mt-2'>🙂🙂🙂🙂🙂✔✔</p>
           <button className='float-left bg-black w-[7rem] ml-20 mt-[5rem]  text-white'><Link to="/driver">
           ◀Go Back
            </Link></button>
           <button className='float-right mr-20 mt-[5rem] bg-black w-[7rem] text-white'><Link to="/login" >
           🏠Home
            </Link></button>
        </div>

    </div>
  )
}

export default Form
