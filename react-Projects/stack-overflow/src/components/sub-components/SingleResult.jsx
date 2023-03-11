import React from "react";
import "./sub-style/main.body.css"


export default function SingleResult(props) {
  return (
    <div className="single-res">
      <div class="votes">
        <p>{props.vote} votes</p>
        <p className="answer">{props.answers} answers</p>
        <p className="view">{props.view} views</p>
      </div>
      <div className="text">
       <a href=""> <h5>{props.title}</h5></a>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
