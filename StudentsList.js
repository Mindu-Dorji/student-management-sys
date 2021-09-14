import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentsDetail = (props) => {
  return (
    <ul class="list-group">
      <li class="list-group-item">{props.students.name}</li>
      <li class="list-group-item">{props.students.age}</li>
      <li class="list-group-item">{props.students.sex}</li>
      <li class="list-group-item">{props.students.mark}</li>
      <li class="list-group-item">{props.students.registeredOn}</li>
    </ul>
  );
};

export const StudentsList = () => {
  const [formToggle, setFormToggle] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(false);

  const [studentsList, setStudentsList] = useState();

  const [selectedStudents, setSelectedStudents] = useState();

  const fetchStudentsList = async () => {
    await axios
      .get(`http://localhost:3000/students`, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(function (response) {
        // handle success
        setStudentsList(response.data);
        // setWeatherData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    fetchStudentsList();
  }, []);
  const deleteStudents = async _id => {
    await axios.delete(`http://localhost:3000/students/${_id}`);
    fetchStudentsList();
  }
  // const updateStudents = async _id => {
  //   await axios.update(`http://localhost:3000/students/${_id}`);
  //   fetchStudentsList();
  // }
  return (
    <div>
      <div class="row">
        <div className="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sl/No.</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Sex</th>
                <th scope="col">Mark</th>
                <th scope="col">Registration Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentsList &&
                studentsList.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.sex}</td>
                      <td>{item.mark}</td>
                      <td>{item.registeredOn}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setSelectedStudents(item);
                            setDisplayDetail(true);
                          }}
                        >
                          View
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            //updateStudents(item._id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteStudents(item._id);
                            
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h2>Details</h2>

          {displayDetail && (
            <>
              <StudentsDetail students={selectedStudents} />
              <button
                className="btn btn-sm btn-warning"
                onClick={() => setDisplayDetail(!displayDetail)}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
      <br />
    </div>
  );
};
