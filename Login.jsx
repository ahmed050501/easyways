import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import easy from "./eazyway.jpg";

function Login() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
    });

    const [formErrors, setFormErrors] = useState({});
    let navigate = useNavigate();

    let name, value;

    const handleinputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value });
    };

    // const postData =  async(e) =>{
    //     e.preventDefault();
    //     const {name,email,phone,work,password,cpassword} =user;
    //     const res= await fetch('http://localhost:8000/register',{ mode: 'no-cors'},{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json",
    //         },
    //       body:JSON.stringify({
    //          name, email, phone, work, password, cpassword
    //       })
    //     });
    //     const data = await res.json();
    //     console.log(data);
    //     if(data.status ===422 || !data){
    //         window.alert("invalid Registration");
    //         console.log("Invalid Registration");
    //     }
    //     else{
    //         window.alert("succesfull Registration");
    //         console.log("succesfull Registration");

    //     }
    // }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0) {
            console.log(user);
        }
    }, [formErrors]);

    const postData = (e) => {
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        e.preventDefault();
        setFormErrors(validate(user));
        const { name, email, phone, password, cpassword } = user;
        console.log(formErrors);

        axios
            .post("http://localhost:8080/register", {
                name,
                email,
                phone,
                password,
                cpassword,
            })
            .then((res) => console.log("postdata", res))
            .catch((err) => console.log(err));
        if (formErrors !== null) {
            return navigate("/login")
        }

    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.password !== values.cpassword) {
            errors.cpassword = "Password must be same"
        }
        return errors;
    };

    return ( <
        >

        <
        img src = { easy }
        className = "float-left rounded-[40%] w-[150px] h-[150px] absolute mt-12 ml-[18rem]" /
        >
        <
        div className = "grid justify-items-center  w-full h-[50rem] bg-orange-200 header bg-cover bg-center" >
        <
        h1 className = "mt-[8rem] ml-64 text-3xl italic hover:not-italic" > { " " }
        Fill This form to enter into eazy - way and book your Ride☺😊 <
        /h1> <
        form method = "POST"
        className = " w-[20rem] h-[26rem] mt-[-7rem] border-solid  border-4   bg-gray-200  text-center" >
        <
        h1 > fill this form and get into eazy - way < /h1>{" "} <
        input type = "text"
        name = "name"
        placeholder = "Name"
        value = { user.name }
        onChange = { handleinputs }
        className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
        >
        <
        p > { formErrors.name } < /p> <
        br / >

        <
        input type = "text"
        name = "email"
        placeholder = "Email"
        value = { user.email }
        onChange = { handleinputs }
        className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
        >
        <
        br / >
        <
        p > { formErrors.email } < /p> <
        input type = "text"
        name = "phone"
        placeholder = "Phone"
        value = { user.phone }
        onChange = { handleinputs }
        className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
        >
        <
        br / >
        <
        p > { formErrors.phone } < /p> <
        input type = "text"
        name = "password"
        placeholder = "Password"
        value = { user.password }
        onChange = { handleinputs }
        className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
        >
        <
        p > { formErrors.password } < /p> <
        input type = "text"
        name = "cpassword"
        placeholder = "Confirm password"
        value = { user.cpassword }
        onChange = { handleinputs }
        className = "text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded" /
        >
        <
        p > { formErrors.cpassword } < /p> <
        button type = "submit"
        className = "text-center p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] bg-orange-200 rounded-md"
        onClick = { postData } >

        Sign up <
        /button>{" "} < /
        form > { " " } <
        /div>{" "} < /
        >
    );
}

export default Login;