import React, { useState } from "react";
import "./scroller.css";
import DisplayData from "./displayData";

// var input = document.getElementById("myInput"); //["book", 3, "pin", 4];//
// var btn = document.getElementById("objectify");
// var output = document.getElementById("results");
// var myArr = null;

// function pushToArray() {
//   // var input = document.getElementById("myInput");
//   // myArr = input;
//   myArr = [...document.getElementById("myInput").files];
//   // <DisplayData arr={myArr} />;
// }

// function displayData() {
//   // for (const element of myArr) {
//   //   console.log(element);
//   // }
//   console.log(myArr);
//   // myArr.map(function (element) {
//   //   return <DisplayData name={element.name} />;
//   // });

//   // myArr.map((item, index) => {
//   //   return (
//   //     <div>
//   //       {console.log(item)}
//   //       <DisplayData name={item.name} />)
//   //     </div>
//   //   );
//   // });
// }

// function scroller() {
//   function clickHandler() {
//     pushToArray();
//     displayData();
//   }
//   return (
//     <div className="scrollBox">
//       <input
//         id="myInput"
//         directory=""
//         webkitdirectory=""
//         type="file"
//         accept=".mp4"
//       />
//       <button id="objectify" type="button" onClick={clickHandler}>
//         Click
//       </button>
//       <ul className={myArr != null ? "nav-menu active" : ""}>
//         <DisplayData arr={myArr != null ? myArr : [1, 2, 3]} />
//       </ul>
//     </div>
//   );
// }
function Scroller() {
  const [myArray, setMyArray] = useState([]);

  function clickHandler() {
    setMyArray((myArray) => [...document.getElementById("myInput").files]);
    console.log(myArray);
  }
  return (
    <div className="scrollBox">
      <input
        id="myInput"
        directory=""
        webkitdirectory=""
        type="file"
        accept=".mp4"
      />
      <button id="objectify" type="button" onClick={clickHandler}>
        Click
      </button>

      <ul className="list-unstyled">
        {myArray.map((item) => (
          <li key={item.name} className={item.modifier}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scroller;
