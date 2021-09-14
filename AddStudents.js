import React, { useState } from "react";
import axios from "axios";

export const AddStudents = () => {
  const [formToggle, setFormToggle] = useState(false);

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = useState();
  const [mark, setMark] = useState();

  const saveStudents = async () => {
    if (name === "" && age === "") {
      alert("Please enter name and age");
    } else {
      await axios
        .post("http://localhost:3000/students", {
          name: name,
          age: age,
          sex: sex,
          mark: mark,
        })
        .then(function (response) {
          alert("saved Successfully");
          window.location.reload();
          console.log(response);
        })
        .catch(function (error) {
          alert("Error saving Students detail");
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div class="row">
        <div className="col-md-12">
          <div
            style={{
              textAlign: "right"
            }}
          >
            <button
              className="btn btn-warning"
              onClick={() => setFormToggle(true)}
            >
              New
            </button>
          </div>
        </div>
      </div>
      <br />
      {formToggle && (
        <div class="row">
          <div className="col-md-12">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="col">
                <input
                  type="age"
                  class="form-control"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="sex"
                  onChange={(e) => setSex(e.target.value)}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="mark"
                  onChange={(e) => setMark(e.target.value)}
                />
              </div>
              <div class="col text-right">
                <button
                  className="btn btn-success"
                  onClick={() => saveStudents()}
                >
                  Submit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => setFormToggle(!formToggle)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
