import React, { useState } from "react";
import DisplayData from "./displayData";
import "./scrollBar.css";

function ScrollBar() {
  const [myArray, setMyArray] = useState([]);

  // function clickHandler() {
  //   setMyArray((myArray) => [...document.getElementById("myInput").files]);
  //   console.log(myArray);
  // }

  return (
    <div className="scrollBox">
      <input
        id="myInput"
        directory=""
        webkitdirectory=""
        type="file"
        accept=".mp4"
        onChange={(e) =>
          setMyArray((myArray) => [...document.getElementById("myInput").files])
        }
      />
      {console.log(
        myArray.forEach(function (prop) {
          console.log(prop);
        })
      )}
      <ul className="list-unstyled">
        {myArray.map((item) => (
          <DisplayData name={item.name} image={item} id={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default ScrollBar;
