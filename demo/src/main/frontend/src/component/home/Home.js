import { Link, useNavigate   } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import './home.css'
function Home(){

    return(

        <div>
           <div className="header">
                <div className="home">
                <Link to="/">
                    <i class="bi bi-house-door"></i>
                </Link>
                </div>
                <div className="edit">
                <Link to="/editUserInfo">
                <i class="bi bi-person-circle"></i>
                </Link>
                </div>
            </div>
            <div className="search">
                <form className="example">
                <button type="submit"><i class="bi bi-search"></i></button>
                <input type="text" placeholder="..ابحث عن سلعة " name="search2" />
                </form>
            </div>
            <div className="nav">
                <ul>
                    <li><i class="bi bi-truck-flatbed"> سيارات</i></li>
                    <li><i class="bi bi-building"> عقار</i></li>
                    <li><i class="bi bi-display"> اجهزة</i></li>
                </ul>
            </div>
        </div>

    );

}


export default Home;