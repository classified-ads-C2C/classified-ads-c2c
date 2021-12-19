import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home'
import Login from './component/login/Login'
import Singup from './component/singup/Singup'
import EditUserInfo from "./component/editUserInfo/EditUserInfo";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/singup" element = {<Singup />} />
        <Route path = "/editUserInfo" element = {<EditUserInfo />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
