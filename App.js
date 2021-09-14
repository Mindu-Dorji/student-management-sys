// import logo from "./logo.svg";
import "./styles.css";
import { AddStudents } from "./AddStudents";
import { StudentsList } from "./StudentsList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Students Mark Sheet</h3>
        </div>
      </div>
      <AddStudents />
      <StudentsList />
    </div>
  );
}

export default App;
