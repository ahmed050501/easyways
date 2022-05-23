import React,{useState} from 'react'

const MyAccordian = ({question,answer}) => {
    const [show, setshow] = useState(false)
  return (
      <>
    <div className='flex bg-white ml-[27rem] w-[50rem] h-[4rem] flex-1 justify-between border-2 '>
    <h3 className='text-[#064b76] mt-4 '>{question}</h3>
      <p  className='text-[#064b76]  mt-4   ' onClick={ ()=>{setshow(!show)}}>{show?"➖":"➕"}</p>
      {/* <hr className='w-full h-1 bg-gradient-to-r from-indigo-700 to-cyan-400'/> */}
      
    </div>
    {show && <p className='ml-[27rem] bg-white h[4rem] w-[30rem]'>{answer}</p>}
    </>
  )
}

export default MyAccordian