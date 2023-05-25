import { AiFillCamera } from "react-icons/ai"
import Avatar from "./Avatar"
import { MdPhotoLibrary, MdTagFaces } from "react-icons/md"
import Divider from "./Divider"

const CreateNewPost = () => {
  return (
    <div className="createNewPost">
        <div className="top">
            <Avatar />
            <input type="text" placeholder="What's on your mind?" />
        </div>
        <Divider />
        <div className="bottom">
            <div className="item">
                <AiFillCamera className="live" />
                <span>Live</span>
            </div>
            <div className="item">
                <MdPhotoLibrary className="photos" />
                <span>Photo/video</span>
            </div>
            <div className="item">
                <MdTagFaces className="feelings" />
                <span>Feeling/activity</span>
            </div>
        </div>
    </div>
  )
}
export default CreateNewPost