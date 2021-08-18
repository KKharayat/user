import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Form = ({ setUserObj, userObj }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    birthday: "",
    gender: "",
    city: "",
  });
  const history = useHistory();
  let name, value;
  const handleInputs = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  console.log(userObj);
  const submit = (e) => {
    e.preventDefault();
    if (
      user.name &&
      user.email &&
      user.number &&
      user.birthday &&
      user.gender &&
      user.city
    ) {
      setUserObj([...userObj, user]);
      history.push("/detail");
    }
  };
  return (
    <>
      <div className="form-custom">
        <form autoComplete="off" className="form-user">
          <div className="form-wrapper">
            <label className="label-text">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleInputs}
            ></input>
          </div>
          <div className="form-wrapper">
            <label className="label-text">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleInputs}
            ></input>
          </div>
          <div className="form-wrapper">
            <label className="label-text">Number</label>
            <input
              className="form-control"
              type="number"
              name="number"
              id="number"
              value={user.number}
              onChange={handleInputs}
            ></input>
          </div>
          <div className="form-wrapper">
            <label className="label-text">Birthday:</label>
            <input
              className="form-control"
              type="date"
              id="birthday"
              name="birthday"
              value={user.birthday}
              onChange={handleInputs}
            ></input>
          </div>
          <div className="form-wrapper">
            <label className="label-text">Gender</label>
            <input
              className="form-control"
              type="text"
              id="gender"
              name="gender"
              value={user.gender}
              onChange={handleInputs}
            ></input>
          </div>
          <div className="form-wrapper">
            <label className="label-text">City</label>
            <input
              className="form-control"
              type="text"
              id="city"
              name="city"
              value={user.city}
              onChange={handleInputs}
            ></input>
          </div>

          <button className="btn" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
