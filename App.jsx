import "./App.css";
import Dialog from "./Dialog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Registration from "./Registration";
import About from "./About";
import Contact from "./Contact";
import Driver from "./Driver";
import Div1 from "./Div1";
import Div2 from "./Div2";
import Div3 from "./Div3";
import Login from "./Login";
import Div5 from "./Div5";
import Div4 from "./Div4";
import Model from "./Model";
import Openmodel from "./Openmodel.jsX";
import Form from "./Form";
import Truck from "./Truck";

function App() {
  return (
      
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/div" element={<Div1 />} />
        <Route path="/div2" element={<Div2 />} />
        <Route path="/div3" element={<Div3 />} />
        <Route path="/div3" element={<Div3 />} />
        <Route path="/div4" element={<Div4 />} />
        <Route path="/div5" element={<Div5 />} />
        <Route path="/openmodel" element={<Dialog/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/truck" element={<Truck/>} />
      </Routes>
    </Router>
  );
}

export default App;
