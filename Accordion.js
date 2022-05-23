import React ,{useState} from 'react';
import {question} from "./apiaccordion";
import MyAccordian from './MyAccordion';

const Accordian = () => {
    const [data,setData] = useState(question)
  return (
    <>
    <section>
       
    {
        data.map((curElem)=>{
            const {id,question,answer} = curElem;
            return <MyAccordian  {...curElem}/>

        })
    }
    </section>
    
    </>
  )
}

export default Accordian