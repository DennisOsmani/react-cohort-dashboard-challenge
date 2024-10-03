import "../CreatePost/CreatePost.css";
import ProfileIcon from "../Left-Menu/ProfileIcon";

export default function CreatePost() {
    return(
        <section className="createPost">
            <ProfileIcon />
            <input className="newPostText" type="text" name="newposttext" placeholder="What's on your mind?" onChange={""} value={""}/>
            <button className="postButton" onClick={""}>Post</button>
        </section>
    );
}