import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();

  const [id, setid] = useState(0);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");

  useEffect(() => {
    setemail(localStorage.getItem("email"));
    setname(localStorage.getItem("name"));
    setid(localStorage.getItem("id"));
  }, []);

  function handleUpdate(e) {
    e.preventDefault();
    axios
      .put(`https://644fb864b61a9f0c4d2982b2.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });

    // console.log(name);
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
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Update;
