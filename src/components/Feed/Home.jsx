import CreatePost from "../CreatePost/CreatePost";
import Post from "./Post";
import "../Feed/Home.css";

export default function Home() {
    return(
        <div className="home-page">
          <CreatePost />
          <Post />
          <Post />
          <Post />
        </div>
    );
}