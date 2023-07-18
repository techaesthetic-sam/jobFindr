import React, { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, loginUser } from "../features/user/userSlice";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
export default function Register() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const { isLoading, user } = useSelector((store) => store.user);
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
      return;
    }

    // setValues({ ...values, name: "", password: "", email: "" });
    // console.log(e.target);

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, password, email }));
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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading" : "submit"}
        </button>
        <p>
          {values.isMember ? "Already a member ?" : "Not a member yet"}
          <button type="button" onClick={handleToggle} className="member-btn">
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
