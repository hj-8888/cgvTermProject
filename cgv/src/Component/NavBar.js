import { Link } from 'react-router-dom';

function NavBar(){
    return(
         <div className="nav-bar">
            <ul className="manus">
                <Link to="/movies"><li><span>영화</span></li></Link>
                <Link to="/theater"><li><span>극장</span></li></Link>
            </ul>
         </div>
    );
 }

 export default NavBar;