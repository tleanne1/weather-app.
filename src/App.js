import "./App.css";
import WeatherSearch from "./WeatherSearch";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <header>
              <ul>
                <span>
                  <li className="navigation">
                    <a href="/">Lison</a>
                  </li>
                  <li className="navigation">
                    <a href="/">Paris</a>
                  </li>
                  <li className="navigation">
                    <a href="/">Sydney</a>
                  </li>
                  <li className="navigation">
                    <a href="/">San Francisco</a>
                  </li>
                </span>
              </ul>
            </header>
            <WeatherSearch />
            <div className="weather-summary">
              <div className="weather-summary-header">
                <h1>Lisbon</h1>
                <div className="weather-detail">Wednesday 20:20</div>
                <div className="weather-detail">Clear</div>
              </div>
              <div className="weather-temp">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="white"
                  size={50}
                  animate={true}
                />
                14<span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
