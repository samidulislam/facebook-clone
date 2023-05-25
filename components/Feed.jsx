import CreateNewPost from "./CreateNewPost"
import Post from "./Post"

const Feed = () => {
  return (
    <div className="feed">
      <CreateNewPost />
      <Post />
      <Post />
    </div>
  )
}
export default Feed