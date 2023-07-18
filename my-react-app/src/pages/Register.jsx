import React, { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export default function Register() {
  const [values, setValues] = useState(initialState);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setValues({ ...values, [name]: value });
    // console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { name, password, email, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill the details");
    }

    setValues({ ...values, name: "", password: "", email: "" });
    // console.log(e.target);
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
