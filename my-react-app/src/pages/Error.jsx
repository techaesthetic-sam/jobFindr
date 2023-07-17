import React from "react";
import Wrapper from "../wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <Wrapper>
      <div className="full-page">
        <img src={img} />
        <h3>Ohh! Page Not Found</h3>
        <p>We cant see what yu are looking for</p>
        <Link to="/">back Home</Link>
      </div>
    </Wrapper>
  );
}
