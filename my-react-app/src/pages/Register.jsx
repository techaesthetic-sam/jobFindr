import React, { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export default function Register() {
  const [values, setValues] = useState(initialState);

  function handleChange(e) {
    setValues(e.target.value);
    // console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }

  function handleToggle() {
    setValues({ ...values, isMember: !values.isMember });
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        {values.isMember ? <h3>Login</h3> : <h3>Register</h3>}
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            handleChange={handleChange}
            name="name"
          />
        )}
        <FormRow
          type="email"
          value={values.email}
          handleChange={handleChange}
          name="email"
        />
        <FormRow
          type="password"
          value={values.password}
          handleChange={handleChange}
          name="password"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Already a member ?" : "Not a member yet"}
          <button onClick={handleToggle} className="member-btn">
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
