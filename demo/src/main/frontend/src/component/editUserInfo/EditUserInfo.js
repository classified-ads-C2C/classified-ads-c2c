import { Button } from "react-bootstrap";
import {icon} from 'bootstrap'
import Navbar from "../navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { addUser } from "../../reducers/user/user";
import { Link, useNavigate   } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./editUserInfo.css"

function EditUserInfo(){

     
    const [name, setName] = useState();
    const [PhoneNumber, setUserPhoneNumber] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();
    const [data, setData] = useState();
    // const errorMsg = document.querySelector(".error-msg");
    // const successMsg = document.querySelector(".success-msg");
    const navigate = useNavigate();
    let result = false


   const dispatch = useDispatch();
   const state = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });

  let id =  state.user[0].id
console.log(id);

    const userName = (e) =>{
        setName(e.target.value);
    }

    const userPhoneNumber = (e) =>{
        setUserPhoneNumber(e.target.value);
    }

    const userPassword1 = (e) =>{
        setPassword1(e.target.value);
    }

    const userPassword2 = (e) =>{
        setPassword2(e.target.value);
    }

    const verificationUserName = (e) =>{

        e.preventDefault();

      
        let data ={
            name: name
        }
    
        console.log(data);
        console.log(state.user);
        
        axios.put(`http://localhost:8081/api/useredit/name/${id}`, data)
          .catch((error) => console.log(error));

          
            // successMsg.style.opacity = 1;
            // errorMsg.style.opacity = 0;


    }



const verificationUserPhoneNumber = (e) =>{

    e.preventDefault();

  
    let data ={
      
        phone: PhoneNumber      
    }

    console.log(data);

    
    axios.put(`http://localhost:8081/api/user/edit/phone/${id}`, data)
      .catch((error) => console.log(error));

      
        // successMsg.style.opacity = 1;
        // errorMsg.style.opacity = 0;


}



const verificationUserPassword = (e) =>{

    e.preventDefault();

    if(password1 == password2){
    let data ={

        password: password1
    }

    console.log(data);

    
    axios.put(`http://localhost:8081/api/user/edit/password/${id}`, data)
      .catch((error) => console.log(error));

      
        // successMsg.style.opacity = 1;
        // errorMsg.style.opacity = 0;


}
else{
    
    // errorMsg.style.opacity = 1;
    // successMsg.style.opacity = 0;

}
}


    return(

        <div>
            <Navbar/>
            <div className="success-msg">
               <p> <b>ممتاز!</b>تم انشاء حساب جديد بنجاح </p> 
            </div>    
            <div className="wrapper">
                <div id="formContent">
                <h2 className="active">اعادة تعيين المعلومات الشخصة</h2>
                <form>
                    <button type="submit" className="button" onClick={verificationUserName}>اعادة تعيين</button>
                    <input type="text"  placeholder="اسم المستخدم" onChange={userName}/>                   
                </form>
                <form>
                    <button type="submit" className="button" onClick={verificationUserPhoneNumber}>اعادة تعيين</button>              
                    <input type="text"  placeholder="رقم الجوال" onChange={userPhoneNumber}/>                  
                   
                </form>
                <form>
                    <button type="submit" className="button" onClick={verificationUserPassword}>اعادة تعيين</button>
                    <input type="password"  placeholder="الرقم السري" onChange={userPassword1}/>
                    <input type="password" id="input-password2" placeholder=" اعد كتابة الرقم السري" onChange={userPassword2}/>                  
                </form>               
                </div>
            </div>
        </div>
    );
}

export default EditUserInfo;