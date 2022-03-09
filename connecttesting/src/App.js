import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MapContainer from "./mapContainer";

function App() {
  return (
    <Router>
      <Fragment>
        <header className="header">
          <div> React Node postgreSQL Connection </div>
        </header>
        <div className="main">
          <div>Kakao map</div>
          <MapContainer />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
