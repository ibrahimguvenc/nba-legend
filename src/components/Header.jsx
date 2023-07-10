import logo from "../assets/nba-logo.png";
import "../sass/Header.scss";

const Header = () => {
  return (
    <div>
      <div className="header-title">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
