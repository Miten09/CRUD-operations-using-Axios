import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");

  const header = { "Access-Control-Allow-Origin": "*" };

  function handlesubmit(e) {
    e.preventDefault();
    axios
      .post("https://644fb864b61a9f0c4d2982b2.mockapi.io/crud", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        navigate("/read");
      });
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
