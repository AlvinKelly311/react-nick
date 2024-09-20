import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="container">
      <div className="back">
        <nav>
          <div className="logo">
            <img src="./assets/images/header-logo.svg" />
          </div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
const Main = () => {
  return (
    <div className="summer">
      <div className="new">
        <h5>Our Summer Conections</h5>
        <h1> The New Arrival </h1>
        <h2>
          <span>Nike</span> Shoes
        </h2>
        <p>
          Discover Nike stylish Arrivals, quailty <br /> comfort, and innovation
          for your active sTp
        </p>

        <button className="btn">Shop now</button>

        <div className="num">
          <div className="pluse">
            <h2>1k+</h2>
            <p>brands</p>
          </div>
          <div className="pluse">
            <h2>500+</h2>
            <p>shops</p>
          </div>
          <div className="pluse">
            <h2>250k+</h2>
            <p>custumers</p>
          </div>
        </div>
      </div>

      <div className="image">
        <div className="image1">
          <img src="./assets/images/big-shoe1.png" alt="Nike" />
        </div>

        <div className="shoes">
          <div className="shoe1">
            <img src="./assets/images/thumbnail-shoe1.svg" alt="thumbnail" />
          </div>
          <div className="shoe1">
            <img src="./assets/images/thumbnail-shoe2.svg" alt="thumbnail" />
          </div>
          <div className="shoe1">
            <img src="./assets/images/thumbnail-shoe3.svg" alt="thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  //return React.createElement("footer", null, "We're currently open!");

  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry we're close");

  // in this javascript logic, we are trying to basically display and alert in the App, whether the resturant is open or not.

  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
  );
};

export default App;
