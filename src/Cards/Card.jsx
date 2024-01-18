import "./Card.css";
import React from "react";
import Cardbody1 from "./Cardbody1";
import Cardbody2 from "./Cardbody2";
import Cardbody3 from "./Cardbody3";
import Cardbody4 from "./Cardbody4";

function Card(props) {
  let cardBodyComponent;

  switch (props.no) {
    case 1:
      cardBodyComponent = <Cardbody1 />;
      break;
    case 2:
      cardBodyComponent = <Cardbody2 />;
      break;
    case 3:
      cardBodyComponent = <Cardbody3 />;
      break;
    case 4:
      cardBodyComponent = <Cardbody4 />;
      break;
    default:
      cardBodyComponent = <Cardbody1 />;
  }

  return (
    <>
      <div className={` cardmain card${String(props.clsno)}`}>
        <div className="card-head headcard">
          <h6 className="card-subtitle mb-2 text-body-secondary pt-2">
            {props.name}
          </h6>
          <h5 className="card-title pt-2">{props.pack}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary pt-2">
            {props.due}
          </h6>
        </div>
        <div className="card-head middle">
          <a href="https://www.figma.com/pricing">
            <button className={`cardbtn cardbtn${props.crtbtn}`}>{props.btn}</button>
          </a>
          <p className="card-text card-link">{props.link}</p>
        </div>
        {cardBodyComponent}
      </div>
    </>
  );
}

export default Card;
