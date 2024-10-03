import ProfileIcon from "../Left-Menu/ProfileIcon";
import "../Profile/Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
        <h2 className="title">Profile</h2>
        <div className="profile-card">
        <div className="profile-header">
            <ProfileIcon />
            <h3 className="profile-name">Name</h3>
        </div>
        <div className="profile-info1">
            <div className="account-info">
            <hr className="post-divider" />
                <h4>Account Info</h4>
                <p>First Name*</p>
                <input type="text" name="firstName" value={"Mor"}/>
                <p>Last Name*</p>
                <input type="text" name="lastName" value={"Mor"}/>
                <p>Username*</p>
                <input type="text" name="username" value={"Mor"}/>
                <p>Email*</p>
                <input type="text" name="email" value={"email"}/>
            </div>
            <div className="address-info">
            <hr className="post-divider" />
                <h4>Address Info</h4>
                <p>Street</p>
                <input type="text" name="street" value={"Mor"}/>
                <p>Suite</p>
                <input type="text" name="suite" value={"Mor"}/>
                <p>City</p>
                <input type="text" name="city" value={"Mor"}/>
                <p>Zipcode</p>
                <input type="text" name="zipcode" value={"Mor"}/>
            </div>
        </div>
        <div className="profile-info2">
            <div className="contact-info">
            <hr className="post-divider" />
                <h4>Contact Info</h4>
                <p>Phone*</p>
                <input type="text" name="phone" value={"Mor"}/>
                <p>Website</p>
                <input type="text" name="website" value={"Mor"}/>
                <p className="required">Required*</p>
                
            </div>
            <div className="company-info">
            <hr className="post-divider" />
                <h4>Company Info</h4>
                <p>Name</p>
                <input type="text" name="companyName" value={"Mor"}/>
                <p>catch Phrase</p>
                <input type="text" name="catchPhrase" value={"Mor"}/>
                <p>Buisness Statement</p>
                <input type="text" name="buisnessStatement" value={"Mor"}/>
            </div>
        </div>
        <button className="profile-button">Save or Edit</button>
    </div>
    </div>
    );
}