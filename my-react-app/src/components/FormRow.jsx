import React from "react";

export default function FormRow({ type, name, handleChange, value }) {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
