import { useContext } from "react";
import ProfileIcon from "../Left-Menu/ProfileIcon";
import "../Profile/Profile.css";
import { PostContext } from "../../App";

export default function Profile() {
    const { loggedInUser } = useContext(PostContext);

    return (
        <div className="profile-container">
        <h2 className="title">Profile</h2>
        <div className="profile-card">
        <div className="profile-header">
            <div className="profile-image" style={{backgroundColor: loggedInUser.favouriteColour}}>
              <p className="initials4">{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
            </div>
            <h3 className="profile-name">{loggedInUser.firstName} {loggedInUser.lastName}</h3>
        </div>
        <div className="profile-info1">
            <div className="account-info">
            <hr className="post-divider" />
                <h4>Account Info</h4>
                <p>First Name*</p>
                <input type="text" name="firstName" value={loggedInUser.firstName}/>
                <p>Last Name*</p>
                <input type="text" name="lastName" value={loggedInUser.lastName}/>
                <p>Username*</p>
                <input type="text" name="username" value={"username"}/>
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
        <button className="profile-button">Save</button>
    </div>
    </div>
    );
}