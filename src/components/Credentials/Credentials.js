import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/credSlice";
import "./Credentials.css";

function Credentials() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const cred = useSelector((state) => state.credentials);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatching action.payload
    dispatch(update({ name, email }));
    // Clearing out input fields after submitting
    setName("");
    setEmail("");
  };

  return (
    <div className="credentials">
      <h1 className="credentials__title">Redux Toolkit</h1>

      <form className="credentials__form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button onClick={submitHandler}>Submit</button>
      </form>

      <div className="credentials__current-state">
        <h3>Current State</h3>
        <hr />
        <p>{cred.name}</p>
        <p>{cred.email}</p>
      </div>
    </div>
  );
}

export default Credentials;
