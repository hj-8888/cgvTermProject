import { Link } from 'react-router-dom';

function NavBar(){
    return(
         <div className="nav-bar">
            <ul className="manus">
                <Link to="/movies"><li><span>์ํ</span></li></Link>
                <Link to="/theater"><li><span>๊ทน์ฅ</span></li></Link>
            </ul>
         </div>
    );
 }

 export default NavBar;