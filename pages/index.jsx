import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
};

export default Home;
