import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className=" indices-container d-none d-md-flex ms-md-5 ms-lg-0 px-md-5 px-lg-0 ">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex ms-md-2 ms-lg-0">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;