import React from "react";

export default function Greetings() {
  return (
    <div
      style={{
        border: "1px solid blue",
        maxWidth: "70%",
        rowGap: "0px",
        margin: "6% auto",
        padding: "1%",
        backgroundColor: "#003366",
        borderRadius: "10px",
        color: "white",
        display: "flex",
      }}
    >
      <div
        style={{
          marginLeft: "20px",
        }}
      >
        <h2
          style={{
            fontFamily: "cursive",
            fontSize: "100%",
          }}
        >
          Choose a City Above.
        </h2>
        <h3>Thanks for using this App. 😀</h3>
        <p
          style={{
            fontFamily: "cursive",
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
          width: "25%",
          height: "25%",
          margin: "10% 3%",
        }}
      >
        <img
          src="/src/Components/Faiz2.png"
          style={{
            width: "100%",
            height: "100%",
            margin: "10% 10%",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}
