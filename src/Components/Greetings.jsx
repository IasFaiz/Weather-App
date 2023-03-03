import React from "react";

export default function Greetings() {
  return (
    <div
      style={{
        maxWidth: "80%",
        rowGap: "0px",
        margin: "3% auto",
        padding: "1%",
        backgroundColor: "#003366",
        boxShadow: "10px -2px 20px 2px rgb(0 0 0 / 60%)",
        borderRadius: "10px",
        color: "white",
        display: "flex",
      }}
    >
      <div
        style={{
          marginLeft: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "35px",
          }}
        >
          Choose a City Above.
        </h2>
        <h3>Thanks for using this App. 😀</h3>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          This App is Designed and Developed by <em> Faiz Ahmad</em>.<br /> Here
          You can check Weather of any City Worldwide.
        </p>
        <p>
          Population should be greater than <em>2 laks.</em>
        </p>
      </div>
      <div
        style={{
          width: "45%",
          height: "45%",
          margin: "5% 3%",
        }}
      >
        <img
          src="/Faiz2.png"
          style={{
            width: "100%",
            height: "100%",
            // margin: "10% 5%",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}
