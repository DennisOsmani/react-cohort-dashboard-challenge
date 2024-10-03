import "../Left-Menu/LeftMenu.css";
import HomeIcon from "./HomeIcon";
import ProfileIcon from "./ProfileIcon";
import { Link } from "react-router-dom";

export default function LeftMenu() {
    return(
        <nav className="left-menu">
            <Link to="/" className="home-icon"> 
                <HomeIcon /> 
                Home
            </Link>
            <Link to="/profile" className="profile-icon">
                <ProfileIcon />
                Profile
            </Link>
        </nav>
    );
}