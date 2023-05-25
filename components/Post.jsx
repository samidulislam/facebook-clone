import { MdMoreVert, MdOutlineModeComment } from "react-icons/md";
import { TbShare3, TbThumbUp } from "react-icons/tb";
import Avatar from "./Avatar";
import Divider from "./Divider";

const Post = () => {
  return (
    <div className="post">
      <div className="top">
        <div className="left">
          <Avatar />
          <div className="post-details">
            <span className="username">John Doe</span>
            <span className="timestamp">2 d</span>
          </div>
        </div>
        <div className="right">
          <MdMoreVert />
        </div>
      </div>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <img src="https://images.pexels.com/photos/14454919/pexels-photo-14454919.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
      <div className="bottom">
        <div className="start"></div>
        <Divider />
        <div className="end">
          <div className="item">
            <TbThumbUp />
            <span>Like</span>
          </div>
          <div className="item">
            <MdOutlineModeComment />
            <span>Comment</span>
          </div>
          <div className="item">
            <TbShare3 />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
