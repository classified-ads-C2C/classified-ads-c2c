import { Link, useNavigate   } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import {addUser, addToken}  from "../../reducers/user/action";
import axios from "axios";
import Navbar from "../navbar/Navbar"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./addAds.css"


function AddAds(){

    const [adsTitle, setadsTitle] = useState();
    const [adsLocation, setadsLocation] = useState();
    const [adsDescription, setadsDescription] = useState();
    const [adsImage, setadsImage] = useState();
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("")
    const dispatch = useDispatch();
    let file
    let category = 0
    const state = useSelector((state) => {
     return {
       user: state.userReducer,
       token: state.userReducer.token
     };
   });
 
    let id = state.user.user.id
    let userToken = state.token
    const config = {
     headers: {Authorization: `Bearer ${userToken}`}
    };

    
    const title = (e) =>{
        setadsTitle(e.target.value);
    }

    const location = (e) =>{
        setadsLocation(e.target.value);
    }
    
    const description = (e) =>{
        setadsDescription(e.target.value);
    }

    const categoryRealEstate = (e) => {
      e.preventDefault();

      category = 1
    }

    const categoryCar = (e) => {
      e.preventDefault();

      category = 2
    }

    const categoryDevices = (e) => {
      e.preventDefault();

      category = 3
    }

    const uploadImage = async (e) =>{

        const files = e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset', 'adsimage')
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/elmelm/image/upload",{ //codingshiksha
            method:'POST',
            body:data
        })

         file = await res.json()

        console.log(file.secure_url);
        setImage(file.secure_url)
        setLoading(false)
    }

    const postAds = (e) =>{
        e.preventDefault();
        const data ={
            "title": adsTitle,
            "description": adsDescription,
            "image": image,
            "location":adsLocation,
            "user":{
                "id":id
            },
            "category":{

                "id":category
            }

        };

      
  
  
        axios
          .post("http://localhost:8081/api/ads", data, config)
          .then((response) => {
    
            console.log(response.data);
  
  
          })
          .catch((error) => {console.log(error)
        });
    };
  
      
    return(

        <div>
            <Navbar/>
        <form>
        <div className="ads-from">
          <label>عنوان الاعلان</label>
          <input type="email" className="form-control" placeholder="العنوان..." onChange={title}/>
          <label>المنطقة</label>
          <input type="email" className="form-control" placeholder="المنطقة..." onChange={location}/>
          <label>وصف الاعلان</label>
          <input type="email" className="form-control" placeholder="..." onChange={description}/>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              التصنيف
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button" onClick={categoryRealEstate}>عقار</button>
              <button className="dropdown-item" type="button" onClick={categoryCar}>مركبة</button>
              <button className="dropdown-item" type="button" onClick={categoryDevices}>اجهزة</button>
              </ul>
            </div>
          <label>اضف الصور</label>
          <input type="file" className="form-control-file" onChange={uploadImage}/>
        <button type="submit" className="btn btn-primary" onClick={postAds}>ارسال</button>
        </div>
        
      </form>
  
        </div>
    )
}

export default AddAds;