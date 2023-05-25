import { AiFillFlag, AiOutlineTeam } from "react-icons/ai";
import {
  MdBookmark,
  MdEvent,
  MdFacebook,
  MdHistory,
  MdKeyboardArrowDown,
  MdOndemandVideo,
  MdOutlineGroups,
  MdRssFeed,
  MdStore,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="item">
        <AiOutlineTeam />
        <span>Find friends</span>
      </div>
      <div className="item">
        <MdRssFeed />
        <span>Feeds (most recent)</span>
      </div>
      <div className="item">
        <MdFacebook />
        <span>Welcome</span>
      </div>
      <div className="item">
        <MdOutlineGroups />
        <span>Groups</span>
      </div>
      <div className="item">
        <MdStore />
        <span>Marketplace</span>
      </div>
      <div className="item">
        <MdOndemandVideo />
        <span>Watch</span>
      </div>
      <div className="item">
        <MdHistory />
        <span>Memories</span>
      </div>
      <div className="item">
        <MdBookmark />
        <span>Saved</span>
      </div>
      <div className="item">
        <AiFillFlag />
        <span>Pages</span>
      </div>
      <div className="item">
        <MdEvent />
        <span>Events</span>
      </div>
      <div className="item see-more">
        <MdKeyboardArrowDown />
        <span>See more</span>
      </div>
    </div>
  );
};
export default Sidebar;
