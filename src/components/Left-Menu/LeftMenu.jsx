import "../Left-Menu/LeftMenu.css";
import HomeIcon from "./HomeIcon";
import ProfileIcon from "./ProfileIcon";

export default function LeftMenu() {
    return(
        <nav className="left-menu">
            <HomeIcon /> {/* Make these clickable to render the feed or profile info */}
            <ProfileIcon />
        </nav>
    );
}