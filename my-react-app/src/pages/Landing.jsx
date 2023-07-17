import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../wrappers/LandingPage";
import { Logo } from "../components";

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info*/}
        <div className="info">
          <h1>
            {" "}
            job <span>tracking</span> app{" "}
          </h1>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <Link to="/register" className="btn btn-hero">
          Login/Register
        </Link>
      </div>
      <img className="img main-img" src={main} />
    </Wrapper>
  );
}
