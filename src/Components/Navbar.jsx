import React from "react";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
const Header = () => {
  return (
    <div
      style={{
        background: "#003366",
        width: "100%",
        height: "50px",
        color: "white",
        fontSize: "20px",
        boxShadow: "0px 1px 10px 1px #bababa",
        // margin: "10px 10px",
      }}
    >
      <nav
        style={{
          display: "flex",
          // justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            margin: "5px 10px",
            // marginLeft: "0px",
            padding: "2px",
            fontWeight: "600",
          }}
        >
          WeatherApp
        </div>
        <div
          style={{
            margin: "10px 1px",
            padding: "0px",
          }}
        >
          <ThunderstormOutlinedIcon />
          <WbSunnyOutlinedIcon />
        </div>
      </nav>
    </div>
  );
};

export default Header;
