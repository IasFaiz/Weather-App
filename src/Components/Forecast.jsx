import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Forecast({ forecast }) {
  const Days = [
    "Monday",

    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const WeekDays = Days.slice(new Date().getDay(), Days.length).concat(
    Days.slice(0, new Date().getDay())
  );
  console.log("From Forecast", forecast);
  return (
    <div
      style={{
        margin: "50px auto",
        maxWidth: "90%",
      }}
    >
      <label
        htmlFor=""
        className="title"
        style={{
          fontSize: "15px",
          color: "#212121",
          fontWeight: "500",
        }}
      >
        Daily Forecast
      </label>
      <label
        htmlFor=""
        className="title"
        style={{
          fontSize: "12px",
          color: "#757575",
          fontWeight: "300",
          marginLeft: "10px",
        }}
      >
        Click to Expand
      </label>
      <Accordion allowZeroExpanded>
        {forecast.list.slice(0, 7).map((e, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    style={{
                      height: "8%",
                      backgroundColor: "white",
                      margin: "1%",
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "1% 2%",

                      //   justifyContent: "space-between",
                    }}
                  >
                    <img
                      src={`/icons/${
                        e.weather ? e.weather[0].icon : "01d"
                      }.png`}
                      alt=""
                      style={{
                        width: "40px",
                        margin: "2px",
                      }}
                    />
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                        fontWeight: "600",
                        flex: "1 1",
                        marginLeft: "2%",
                        fontSize: "16px",
                      }}
                    >
                      {WeekDays[index]}
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        flex: "1 1",
                        marginRight: "3%",
                        textAlign: "right",
                        fontSize: "15px",
                      }}
                    >
                      {e.weather[0].description}
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                        fontSize: "15px",
                      }}
                    >
                      {Math.round(e.main.temp_min - 273) + "°C"}/
                      {Math.round(e.main.temp_max - 273) + "°C"}
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div
                  style={{
                    maxWidth: "100%",
                    display: "grid",
                    rowGap: "2px",
                    columnGap: "5px",
                    flex: "1 1",
                    // gridTemplateColumns: "auto auto",
                    padding: "2px 2px",
                    fontSize: "15px",
                    fontWeight: "800",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   flex: "1 1",

                      alignItems: "center",
                      padding: "2px 10px",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                      }}
                    >
                      Description:
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                      }}
                    >
                      {e.main ? e.weather[0].description : "loading..."}
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   flex: "1 1",
                      height: "25px",
                      alignItems: "center",
                      padding: "2px 10px",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                      }}
                    >
                      Humidity:
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                      }}
                    >
                      {e.main ? e.main.humidity : "loading..."}%
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   flex: "1 1",
                      height: "25px",
                      alignItems: "center",
                      padding: "2px 10px",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                      }}
                    >
                      Pressure:
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                      }}
                    >
                      {e.main ? e.main.pressure : "loading..."} pa
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   flex: "1 1",
                      height: "25px",
                      alignItems: "center",
                      padding: "2px 10px",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                      }}
                    >
                      Feels Like:
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                      }}
                    >
                      {e.main
                        ? Math.round(e.main.feels_like - 273)
                        : "loading..."}{" "}
                      °C
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   flex: "1 1",
                      height: "25px",
                      alignItems: "center",
                      padding: "2px 10px",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                      }}
                    >
                      Clouds:
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                      }}
                    >
                      {e.main ? Math.round(e.clouds.all) : "loading..."}%
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   flex: "1 1",
                      height: "25px",
                      alignItems: "center",
                      padding: "2px 10px",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                      }}
                    >
                      Min Temperature:
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                      }}
                    >
                      {e.main
                        ? Math.round(e.main.temp_min - 273)
                        : "loading..."}
                      °C
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   flex: "1 1",
                      height: "25px",
                      alignItems: "center",
                      padding: "2px 10px",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                      }}
                    >
                      Wind Speed:
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                      }}
                    >
                      {e.main ? e.wind.speed : "loading..."}m/s
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //   flex: "1 1",
                      height: "25px",
                      alignItems: "center",
                      padding: "2px 10px",
                    }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        color: "#757575",
                      }}
                    >
                      Max Temperature:
                    </label>
                    <label
                      htmlFor=""
                      style={{
                        color: "#212121",
                      }}
                    >
                      {e.main
                        ? Math.round(e.main.temp_max - 273)
                        : "loading..."}
                      °C
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
