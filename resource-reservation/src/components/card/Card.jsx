import React from "react";
import "./Card.css";

export default props => (
  <section id={props.id} className={props.className}>
    <div>{props.children}</div>
  </section>
);
