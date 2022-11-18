import { Link } from "react-router-dom";
import './Header.css'

function Header () {
    return (
        <div className = 'header-style'>
            <Link to={'/'}>
            <img className = 'logo-style' src='https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png' alt='home logo'/>
            </Link>
        </div>
    )
}
export default Header