import { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "./Components/Current-Weather";
import Search from "./Components/Search";
import { WeatherUrl, WeatherKey } from "./Components/GeoApi";
import Forecast from "./Components/Forecast";
import Greetings from "./Components/Greetings";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
// import { useState } from "react";

function App() {
  const [weather, setweather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const HandleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    // console.log("searchData.label", searchData.label);
    const resp1 = await fetch(
      `${WeatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${WeatherKey}`
    );
    const resp2 = await fetch(
      `${WeatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherKey}`
    );
    const weatherData = await resp1.json();
    const forecastData = await resp2.json();
    setweather({ City: searchData.label, ...weatherData });
    setforecast({ City: searchData.label, ...forecastData });
  };
  {
    // forecast && console.log("forecastData", forecast);
  }
  return (
    <div className="container" style={{}}>
      <NavBar />
      <Search onSearchChange={HandleOnSearchChange} />
      {weather ? (
        <CurrentWeather forecastData={forecast} weatherData={weather} />
      ) : (
        <Greetings />
      )}
      {forecast && <Forecast forecast={forecast} />}
      <Footer />
    </div>
  );
}

export default App;
