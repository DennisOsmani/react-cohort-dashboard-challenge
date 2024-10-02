import '../Header/Header.css'
import Logo from './Logo';
import ProfileIcon from '../Left-Menu/ProfileIcon';

export default function Header() {
    return(
        <header className="header">
            <div className="header-logo">
                <Logo />
            </div>
            <div className="header-profile">
                <ProfileIcon /> {/* Change with logged in user profile */}
            </div>
        </header>
    );
}