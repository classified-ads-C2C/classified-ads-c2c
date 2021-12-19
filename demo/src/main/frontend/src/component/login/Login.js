import { Button } from "react-bootstrap";
import {icon} from 'bootstrap'
import Navbar from "../navbar/Navbar";
import Singin from "../singup/Singup"
import "bootstrap-icons/font/bootstrap-icons.css";
import { addUser } from "../../reducers/user/user";
import { Link, useNavigate   } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import './login.css'

function Login(){

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    //const [data, setData] = useState();
    const navigate = useNavigate();
    let result = false


   const dispatch = useDispatch();
   const state = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });



//   useEffect(() => {
//     axios
//       .post("http://localhost:8081/login", data)
//       .then((response) => {

//         console.log(response.data);
//         const action = setData(response.data)
//       })
//       .catch((error) => console.log(error));
//   });
// };

    const userName = (e) =>{
        setName(e.target.value);
    }

    const userPassword = (e) =>{
        setPassword(e.target.value);
    }

    const verification = (e) =>{

    e.preventDefault();
    
    let data ={
      name,
      password,
    };

      axios
        .post("http://localhost:8081/login", data)
        .then((response) => {
  
          console.log(response.data);
          const action = addUser(response.data)
          dispatch(action);

        })
        .catch((error) => {console.log(error)
      });
  };

    

  //   data.forEach(element => {
     
  //   if(element.name == name){
  //     if(element.password == password)
  //     { result = true
  //       dispatch(addUser(element));
  //       console.log(element);
  //      }
  //     else{
  //       result = false
  //     }
  //   }
    
  //  });

  // if(result)
  //  navigate("/");
    
  

    return(  

        <div>
            <Navbar/>
            <div className="login-wrapper fadeInDown">
                <div id="login-formContent">
                <h2 className="login-active">تسجيل الدخول</h2>
                <form>
                    <input type="text"  placeholder="اسم المستخدم او رقم الجوال" onChange={userName}/>
                    <input type="password" placeholder="الرقم السري" onChange={userPassword}/>
                    <button type="submit" className="login-button" onClick={verification}>دخول</button>
                </form>
                <div id="login-formFooter">
                    <Link to="/singup">
                        <p className="login-underlineHover">انشاء حساب جديد</p>
                    </Link>
                    <br></br>
                </div>
                </div>
            </div>
        </div>
      
    );
}

export default Login;