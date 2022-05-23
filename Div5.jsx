import React , {useState} from 'react';
import logotp from "./logotp.jpeg"
import { Link } from "react-router-dom";
import "./Div5.css";
import bgimg from "./bg-img.jpg"
import Accordion from './Accordion';
import axios from 'axios';

function Div5() {
  const [user, setUser] = useState({
    
    pickup: "",
    destination: "",
    vehicle:" ",
  });
  const postData = (e)=>{
    e.preventDefault();
    const { pickup ,destination ,vehicle} = user;
    axios.post('http://localhost:8080/transadress',{
     pickup ,destination ,vehicle
    }).then(res=>console.log("postdata",res)).catch(err=>console.log(err))
  }
  return (
    <>
    <div className = "bg-[#FFFFFF] w-full relative  ">
     
        <img src={logotp} alt="img" className = "w-[150px] h- [40px]"/>
        <ul className = "text-gray flex ml-[71rem] mt-[-2rem] font-semibold">
            <li className = "p-[10px]">Home</li>
            <li className = "p-[10px]">Contact</li>
            <li className = "p-[10px]">About Us</li>
            <li className ="p-[5px]">GET In Touch</li>
            <li className =" ml-[-5.9rem] mt-[1.1rem] p-[7px] hover:text-orange-600 text-blue-700">8120763387</li>
        </ul>


    </div>
    <hr className='w-full h-1 bg-gradient-to-r from-indigo-700 to-cyan-400'/>
    <div className ="absolute w-full">
      <img src={bgimg} alt="ihb" className='w-[100%] ' />
      </div >
    <div className='relative mt-48  ml-[70rem] w-full '>
      <form className='w-[16rem]' onSubmit={postData}>
      <ul className='w-[14rem] h-[8rem] bg-white list-disc '>
      <li role="button" tabIndex="0" className='text-center list-disc'><input type="text" placeholder='pick up adress' name='pickup' className='w-[16rem] h-[2.5rem] text-center text-lg font-semibold list-disc' /></li><hr/>
      <li role="button"><input type="text" placeholder='destination adress'name='destination' className='w-[16rem] h-[2.5rem] text-center text-lg font-semibold' /></li><hr/>
      <li role="button"><Link to="/truck"><input type="text" placeholder='select vehicle'name='destination' className='w-[16rem] h-[2.5rem] text-center text-lg font-semibold' /></Link></li><hr/>
    
     </ul>
     <button className='w-[16rem] h-[2rem] text-lg bg-orange-600 mt-4 text-white rounded'>Check Fare</button>
     </form>
    </div>
      <div/>
      <section className='mt-[32rem]'>
  <div>
    <p className='ml-[31rem]'><strong  className='text-2xl ml-[-15rem] text-[#3f5d70]'>Easy-ways - India's most reliable, dedicated and expert online Transport logistics services partner!</strong></p>
  </div>
  <div className = "mt-24 ml-12 mr-4 ">
    <p className='text-[#767a7c] text-lg font-semibold '>EasyWays is one of the foremost trucking companies, delivering the plethora of transport services to its esteemed consumers <br/>across India. We are the “best-in-class and cost-effective transporter” as defined by our customers and serving this industry for many years.</p>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold'>We have set high standards in every facet of transportation, and strive to keep raising the bar. With our extensive industry knowledge and skilled team, you can<br/> completely focus on your core interests whereas leaving the tiring and complex moving process on us.
Time-critical? No worries – EasyWays will help you!</p>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold'>Our company is equipped with advanced equipment, modern tools, and expertise that enable us to help our consumers with crucial transportation and supply chain solutions. We ensure <br/>businesses that they will get excellent-quality, prompt, and secure transportation services irrespective of time-constraint, the heavy load issue, and any other related problem.
    </p>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold'>Being the prime logistics services provider, we believe that people, technology, infrastructure and expertise all work together to help <br/>businesses to succeed and henceforth, we are offering the right blend of all these.</p>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold'>We are a customer-centric firm and our every action is aimed to offer ease and comfort to them when it comes to booking a truck. Our online truck booking app has tremendously simplified the<br/> process of booking a truck. Whether you are looking for the companies of online truck booking Hyderabad or online truck booking Mumbai, EasyWays would always be your right choice.</p>
    <h2 className='ml-[-1rem] text-2xl text-[#3f5d70] mt-[3rem] font-bold '>Online Truck Booking- A Smart Trucking Move</h2>
    <p className=' font-semibold text-[#767a7c] text-lg mt-6'>Bored with traditional truck booking practices? Looking for a smart and quick way to book a truck? No worries! <br/> We have introduced an innovative and sophisticated way to book trucks. Our online truck booking app and online portal will allow you to book truck online anywhere, anytime</p>
    <p  className=' font-semibold text-[#767a7c] text-lg mt-6'>Online transport booking is just a click away! No matter what type and size of your load is, we have the necessary infrastructure, equipment and <br/> tools to accommodate your transportation needs. We are a full-service transport company backed by a wide range of tech-enabled trucks, and experienced & skilled team players to offer you best-in-class logistics and supply chain solutions.</p>
    <p  className=' font-semibold text-[#767a7c] text-lg mt-6'>We offer you an instant pricing option while you try to book a truck using our mobile app.<br/> It will give you a better idea to manage your transportation budget.</p>
    <h2 className='ml-[-1rem] text-2xl text-[#3f5d70] mt-[3rem] font-bold '>A trucking company – always there for you!</h2>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold mr-28'>Our safe and affordable transport services will help businesses to drive business growth. We have years of experience in handling different types of transportation projects which enable us to help our businesses to focus on their core competencies and business operations. Our trucking company adds value to businesses at every stage, right from delivering advanced truck booking solutions to time-bound deliveries of goods anywhere across the nation.</p>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold mr-28'>We are your trusted partner in your digital transformation journey. We have designed our app while keeping your truck booking needs in mind.<br/> No matter whether transportation involves short distance or long-distance, we are committed to delivering your goods in a hassle-free, safe and timely manner. How we can help you?</p>
    <h2 className='ml-[-1rem] text-2xl text-[#3f5d70] mt-[3rem] font-bold '>Rich industry experience</h2>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold mr-28'>We bring together years of diverse experience in the transport industry.<br/> As the best online transport booking company, we know what all it needs to bring you<br/> effective and affordable solutions to suit your every transport need.</p>
    <h2 className='ml-[-1rem] text-2xl text-[#3f5d70] mt-[3rem] font-bold '>Advanced technology</h2>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold mr-28'>Our adoption of technology, proven expertise and a huge network of fleet owners and drivers helps us to serve you anywhere, anytime across any part of the country.</p>
    <h2 className='ml-[-1rem] text-2xl text-[#3f5d70] mt-[3rem] font-bold '>On-time, every time</h2>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold mr-28'>We understand the value of time for you as well as for us. That is why we try to deliver your consignment on time, every time.</p>
    <h2 className='ml-[-1rem] text-2xl text-[#3f5d70] mt-[3rem] font-bold '>Competitive pricing</h2>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold mr-28' >By designing innovative transport solutions that are targeted to your unique business requirements, we have created a pricing strategy that works for everyone. Cost can become a major<br/> constraint while hiring our services, but with our most affordable prices, we won’t let this happen with our clients.</p>
    <h2 className='ml-[-1rem] text-2xl text-[#3f5d70] mt-[3rem] font-bold '>Reliability and safety</h2>
    <p className='mt-6 text-lg text-[#767a7c] font-semibold mr-28'>We drive reliability and safety in transport operations through the effective implementation of advanced security tools and technologies. It further helps you to drive efficiency and achieve operational excellence.</p>
    <h2 className='ml-[-1rem] text-2xl text-[#3f5d70] mt-[3rem] font-bold '>Hassle-free services</h2>
    <p  className='mt-6 text-lg text-[#767a7c] font-semibold mr-28'>We provide hassle-free shipping and flawless logistics solutions for all your Transport needs, whether small or big, to all parts across the country.
Are you looking for a reliable and experienced transport company in India? Search online for “local transport near me” or “transport company near me”,
 we are sure that you will find EasyWays in top results. So, call us now to book our services!</p>
  </div>
</section>

<Accordion/>
<section>
  <div className="text-[#064b76] text-center mt-8 text-3xl font-semibold">--------Our Advantages-------</div>
  <h1 className='ml-[24rem] mt-1 text-[26px] font-semibold '>Full Load Services</h1>
  <p className='ml-[24rem] text-[14px]'>We provide Full Truck load<br/>
     transportation services with varied<br/>
      type of trucks available with <br/>
      the click of a button.</p>
      <h1 className='ml-[54rem] mt-[-7rem] text-[26px] font-semibold '>Advance Booking</h1>
      <p className='ml-[54rem]'>Our vehicle availability is guaranteed<br/>
       on daily/weekly/monthly <br/>
       basis to ensure on-time reporting.</p>
</section>


  

    </>
  )
}

export default Div5