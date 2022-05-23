import { React, useState } from "react";
import file10 from "./file10.jpeg"
import file2 from "./file2.jpeg"
import file9 from "./file9.jpeg"
import { Link } from "react-router-dom";
import axios from "axios";


function Div3() {
  const [user, setUser] = useState({
    city: "",
    pickup: "",
    destination: "",
    phone: "",
  });

  let name, value;

  const handleinputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    const { city, pickup, destination, phone } = user;
    axios
      .post("http://localhost:8080/address", {
        city,
        pickup,
        destination,
        phone,
      })
      .then((res) => console.log("postdata", res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="bg-blue-500 w-full h-[40rem] relative ">
        <img src={file9} />
      </div>{" "}
      <div className="w-full h-[60rem] bg-slate-200 flex">
        <div className="w-[40%] h-[30rem] bg-blue-400">
          <p className="text-2xl text-blue-50 ml-4 italic hover:not-italic">
            
            Condition for book small-loader
          </p>{" "}
          <p className="ml-2 text-lg italic hover:not-italic">
            {" "}
            1. There is only person book one bike
          </p>{" "}
          <p className="ml-2  text-lg italic hover:not-italic">
            {" "}
            2. There is only one or two bags but <br /> weight no over 20 kg{" "}
          </p>{" "}
          <p className="ml-2  text-lg italic hover:not-italic">
            {" "}
            3. Face mask compulsory{" "}
          </p>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={user.city}
            onChange={handleinputs}
            className="text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded"
          />
          <input
            type="text"
            name="pickup"
            placeholder="pickupadress"
            value={user.pickup}
            onChange={handleinputs}
            className="text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 ml-1 py-2 h-[2.5rem] rounded"
          />
          <input
            type="text"
            name="destination"
            placeholder="destination"
            value={user.destination}
            onChange={handleinputs}
            className="text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={user.phone}
            onChange={handleinputs}
            className="text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 ml-1 py-2 h-[2.5rem] rounded"
          />
          <div className="flex w-[10rem] h-[4rem] rounded-full ml-4 bg-black">
            <button className="text-white" onClick={postData}>
              {" "}
              BOOK - small loader{" "}
            </button>{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/5511/5511414.png"
              className=" w-[80px] h-[60px] "
            />
          </div>
        </div>{" "}
        <div className="w-[60%] h-[60rem] bg-orange-300 float-right">
          <img src={file10} className="w-full h-[60%]" />
          <img src={file2} className="w-full h-[40%]" />
        </div>{" "}
      </div>{" "}
      <div className="w-[40%] h-[30rem] mt-[-30rem] bg-blue-400">
        <p className="text-2xl text-blue-50 ml-4 italic hover:not-italic">
          {" "}
          Condition for book City-vehicle{" "}
        </p>{" "}
        <p className="ml-2 text-lg italic hover:not-italic">
          {" "}
          1. There is only person book one bike{" "}
        </p>{" "}
        <p className="ml-2  text-lg italic hover:not-italic">
          {" "}
          2. There is only one or two bags but <br /> weight no over 30 kg{" "}
        </p>{" "}
        <p className="ml-2  text-lg italic hover:not-italic">
          {" "}
          3. Face mask compulsory{" "}
        </p>{" "}
        <input
          type="text"
          name="city"
          placeholder="City"
          value={user.city}
          onChange={handleinputs}
          className="text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded"
        />
        <input
          type="text"
          name="pickup"
          placeholder="pickupadress"
          value={user.pickup}
          onChange={handleinputs}
          className="text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 ml-1 py-2 h-[2.5rem] rounded"
        />
        <input
          type="text"
          name="destination"
          placeholder="destination"
          value={user.destination}
          onChange={handleinputs}
          className="text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={user.phone}
          onChange={handleinputs}
          className="text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 ml-1 py-2 h-[2.5rem] rounded"
        />
        <div className="flex w-[10rem] h-[4rem] rounded-full ml-4 bg-black">
          <button className="text-white">
            {" "}
            <Link to="/openmodel" className="pr-2">
              BOOK - cityvehicle
            </Link>
          </button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5511/5511414.png"
            className=" w-[80px] h-[60px] "
          />
        </div>
      </div>
    </>
  );
}

export default Div3;
