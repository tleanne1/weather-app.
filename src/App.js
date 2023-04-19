import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <WeatherSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
