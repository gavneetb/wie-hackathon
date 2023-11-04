import logo from "./images/logo.png";
import volume from "./images/volume.png";
import giraffe from "./images/giraffe.png";

import "./App.css";

function App() {
  const handleClick = () => {
    console.log("Button was clicked!");
    // Perform some action on click
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="app-sub">
        <p className="subheader">Hello! What grade are you in?</p>
        <img src={volume} className="volume" alt="volumebutton" />
      </div>
      <div className="class-profile">
        <div>
          <img src={giraffe} className="giraffe-profile" alt="profile" />
          <div className="grade-selection">
            <button className="grade-button" onClick={handleClick}>Kindergarten - Grade One</button>
          </div>
        </div>
        <div>
          <img src={giraffe} className="giraffe-profile" alt="profile" />
          <div className="grade-selection">
            <button className="grade-button" onClick={handleClick}>Grade Two - Grade Five</button>
          </div>{" "}
        </div>
        <div>
          <img src={giraffe} className="giraffe-profile" alt="profile" />
          <div className="grade-selection">
            <button className="grade-button" onClick={handleClick}>Grade Six - Grade Eight</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
