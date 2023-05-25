import Link from "next/link";
import { AiFillHome, AiOutlineSearch, AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { CgMenuGridO } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <img src="facebook.png" alt="" />
        </div>
        <form className="search">
          <AiOutlineSearch />
          <input type="text" placeholder="Search Facebook" />
        </form>
      </div>
      <div className="center">
        <nav>
          <Link className="active" href={"/"}>
            <AiFillHome />
          </Link>
          <Link href={"/friends"}>
            <AiOutlineTeam />
          </Link>
          <Link href={"/groups"}>
            <GrGroup />
          </Link>
        </nav>
      </div>
      <div className="right">
        <div className="item more">
          <CgMenuGridO />
        </div>
        <div className="item">
          <RiMessengerLine />
        </div>
        <div className="item">
          <MdOutlineNotificationsNone />
        </div>
        <div className="item">
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
};
export default Header;
