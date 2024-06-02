import { Link } from "react-router-dom";
import "./Header.css"
const Header = () =>{
    return(
        <div className="header">
            <h1 className="logo">Mut tech club</h1>
            <nav className="nav-list">
                <ol className="nav-items">
                    <li className="nav-item">
                    <Link to="/">home</Link>
                        </li>
                    <li className="nav-item">
                    <Link to="/leadership">leadership</Link>
                        </li>
                    <li className="nav-item">
                    <Link to="/tracks">tracks</Link>
                        </li>
                    <li className="nav-item">
                    <Link to="/events">events</Link>
                        </li>

                </ol>
            </nav>

        </div>
    )
}
export default Header;