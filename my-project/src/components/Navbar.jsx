import Stats from "../../public/Stats";
import Calendar from "../../public/Calendar";
import Home from "../../public/HomeIcon";
import Icon from "../../public/Icon";
import Navigate from "../../public/Navigate";
import Profile from "../../public/Profile";
import Settings from "../../public/Settings";
import Upload from "../../public/Upload";
import LogoOut from "../../public/LogoOut";

const Navbar = () => {
  return (
    <>
      <div className="Navbar-wrapper min-w-24 h-full p-5 bg-defaultBlack flex flex-col">
        <div className="navbar-logo flex justify-center items-center mb-9">
          <Icon />
        </div>
        <div className="navbar-options flex flex-col gap-10 justify-center items-center">
          <Home />
          <Profile />
          <Calendar className="fill-white" />
          <Stats />
          <Upload />
          <Navigate />
          <Settings />
        </div>
        <div className="spacer flex grow"></div>
        <div className="navbar-logout flex justify-center items-center">
          <LogoOut />
        </div>
      </div>
    </>
  );
};

export default Navbar;
