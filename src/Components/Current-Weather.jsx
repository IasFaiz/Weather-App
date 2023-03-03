import React from "react";

export default function CurrentWeather(props) {
  const icon = `/icons/${
    props.weatherData.name ? props.weatherData.weather[0].icon : "01d"
  }.png`;
  return (
    <div
      className="weather"
      style={{
        width: "75%",
        height: "100%",
        borderRadius: "6px",
        boxShadow: "10px -2px 20px 2px rgb(0 0 0 / 60%)",
        color: "#fff",
        backgroundColor: "#003366",
        margin: " 20px auto 0 auto",
        padding: "15px 20px 20px 20px",
      }}
    >
      <div
        className="top"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "center",
          //   height: "120px",
        }}
      >
        <div>
          <p
            className="city"
            style={{
              fontWeight: 600,
              fontSize: "18px",
              lineWeight: 1,
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            {props.weatherData.name ? props.weatherData.City : "loading..."}
          </p>
          <p
            className="weather-description"
            style={{
              fontWeight: 500,
              fontSize: "17px",
              lineWeight: 1,
              margin: 0,
            }}
          >
            {props.weatherData.name
              ? props.weatherData.weather[0].main
              : "loading..."}
          </p>
        </div>
        <img
          src={icon}
          alt="loading..."
          style={{
            width: "100px",
          }}
        />
      </div>
      <div
        className="bottom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "center",
          //   height: "120px",
        }}
      >
        <p
          className="temperature"
          style={{
            fontWeight: 600,
            fontSize: "70px",
            width: "auto",
            letterSpacing: "-5px",
            margin: " 10px 10px",
          }}
        >
          {props.weatherData.name
            ? Math.round(props.weatherData.main.temp - 273) + "°C"
            : "22°C"}
        </p>
        <div className="details" style={{ width: "90%", paddingLeft: "20px" }}>
          <div className="parameter-row" style={{}}>
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 500, fontSize: "14px" }}
            >
              Details
            </span>
          </div>
          <div
            className="parameter-row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 400, fontSize: "13px" }}
            >
              Description
            </span>
            <span
              className="parameter-label"
              style={{
                textAlign: "left",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              {props.weatherData.name
                ? props.weatherData.weather[0].description
                : "loading..."}
            </span>
          </div>
          <div
            className="parameter-row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 400, fontSize: "13px" }}
            >
              Feels like
            </span>
            <span
              className="parameter-label"
              style={{
                textAlign: "left",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              {props.weatherData.name
                ? Math.round(props.weatherData.main.feels_like - 273) + "°C"
                : "loading..."}
            </span>
          </div>
          <div
            className="parameter-row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 400, fontSize: "13px" }}
            >
              Wind
            </span>
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 600, fontSize: "13px" }}
            >
              {props.weatherData.name
                ? Math.round(props.weatherData.wind.speed) + " m/s"
                : "loading..."}
            </span>
          </div>
          <div
            className="parameter-row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 400, fontSize: "13px" }}
            >
              Humidity
            </span>
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 600, fontSize: "13px" }}
            >
              {props.weatherData.name
                ? props.weatherData.main.humidity + "%"
                : "loading..."}
            </span>
          </div>
          <div
            className="parameter-row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 400, fontSize: "13px" }}
            >
              Pressure
            </span>
            <span
              className="parameter-label"
              style={{ textAlign: "left", fontWeight: 600, fontSize: "13px" }}
            >
              {props.weatherData.name
                ? props.weatherData.main.pressure + " pa"
                : "loading..."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
