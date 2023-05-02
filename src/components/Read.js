import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Read() {
  const [data, setdata] = useState([]);

  const navigate = useNavigate();

  const getdata = async () => {
    await axios
      .get("https://644fb864b61a9f0c4d2982b2.mockapi.io/crud")
      .then((res) => setdata(res.data));
  };

  function handledelete(id) {
    // console.log(id)
    axios.delete(`https://644fb864b61a9f0c4d2982b2.mockapi.io/crud/${id}`);
  }

  useEffect(() => {
    getdata();
  }, [handledelete]);

  function handleEdit(value) {
    console.log(value);
    localStorage.setItem("name", value.name);
    localStorage.setItem("email", value.email);
    localStorage.setItem("id", value.id);

    navigate("/edit");
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>

            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {data.map((value) => {
          return (
            <tbody key={value.id}>
              <tr>
                <th scope="row">{value.id}</th>

                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleEdit(value)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handledelete(value.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default Read;
