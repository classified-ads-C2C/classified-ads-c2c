import { Link, useNavigate   } from 'react-router-dom';
import './navbar.css'
function Navbar(){

    return(
        <div>
        <div className="header">
        <Link to="/">
            <i class="bi bi-house-door"></i>
        </Link>
        </div>
        </div>
    )

}

export default Navbar;