  {
      /* <div className='w-[9rem] h-[3rem] justify-start float-left ml-3 bg-white  mt-5 text-center ' >
            <select className='w-[9rem] h-[3rem] bg-white '    onChange ={cityinputs}>
          <option  >city</option>
          <option >indore</option>
          <option >pithampur</option>
          <option >dewas</option>
          <option >jaipur</option>
        </select>
        </div>
        <div className='w-[9rem] h-[3rem] justify-start float-left  ml-[0.5rem]  bg-white text-center   mt-5' >
          <select className='w-[9rem] h-[3rem] bg-white'    onChange ={vehicleinputs}>
          <option  >Vehicle</option>
          <option >Tata ace</option>
          <option >Truck</option>
          <option >Bike</option>
          <option >Loader</option>
        </select>
        </div>

        <div><select className='w-[18rem] h-[3rem] bg-white  mt-6 '  onChange ={handleinputs}>
          <option  >Source</option>
          <option >Ads</option>
          <option >News</option>
          <option >Newspaper</option>
          <option >Friend</option>
        </select>
        </div> */
  }
  import React from "react";

  function Div3() {
      return ( <
          >
          <
          div className = "grid justify-items-center  w-full h-[50rem]  header bg-cover bg-center" >
          <
          form className = " w-[20rem] h-[26rem]  border-solid  border-4  mt-[20rem] bg-gray-200  text-center" >
          <
          h1 > Please Cofirm your details < /h1> <
          input type = "text"
          name = "name"
          placeholder = "City"
          className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
          >
          { " " } <
          br / >
          <
          input type = "text"
          placeholder = "pickupaddress"
          className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
          >
          { " " } <
          br / >
          <
          input type = "text"
          placeholder = "Dropoffaddress"
          className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
          >
          { " " } <
          br / >
          <
          input type = "tel"
          placeholder = "enter mobile number"
          className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
          >
          { " " } <
          br / >
          <
          input type = "text"
          placeholder = "name"
          className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
          >

          <
          address > Enter company adress < /address> <
          input type = "text"
          placeholder = 'ENTER YOUR COMPANY NAME '
          className = 'text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' / >
          <
          button type = "submit"
          className = "text-center p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] bg-orange-200 rounded-md" > { " " }
          Confirm { " " } <
          /button>{" "} < /
          form > { " " } <
          /div>{" "} < /
          >
      );
  }

  export default Div3;


  ///DIV2 
  import React from 'react'
  // import "./Div2.css";

  function Div2() {
      return ( <
          >

          <
          div className = 'grid justify-items-center  w-full h-[50rem]  header bg-cover bg-center' >


          <
          form className = ' w-[20rem] h-[26rem]  border-solid  border-4  mt-[20rem] bg-gray-200  text-center' >
          <
          h1 > Please Cofirm your details < /h1>

          <
          input type = "text"
          name = "name"
          placeholder = 'City'
          className = 'text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' / > < br / >
          <
          input type = "text"
          placeholder = 'pickupaddress'
          className = 'text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' / > < br / >
          <
          input type = "text"
          placeholder = 'Dropoffaddress'
          className = 'text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' / > < br / >
          <
          input type = "tel"
          placeholder = 'enter mobile number'
          className = 'text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' / > < br / >
          <
          input type = "text"
          placeholder = 'name'
          className = 'text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' / >
          <
          input type = "text"
          placeholder = 'ENTER YOUR COMPANY NAME '
          className = 'text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' / >
          <
          button type = 'submit'
          className = 'text-center p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] bg-orange-200 rounded-md' > Confirm < /button> < /
          form > <
          /div> < /
          >
      );
  }

  export default Div2