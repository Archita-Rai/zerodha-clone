import "./Hero.css";

function Hero() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"></img>
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives,mutual,funds,and more</p>
        <button className="signup-btn btn btn-primary  text-light fs-5 p-2 mb-5">Signup</button>
      </div>
    </div>
  );
}

export default Hero;
