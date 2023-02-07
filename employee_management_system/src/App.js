import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login_details/Login";
import Register from "./component/Register/Register";
import EmployeeDashboard from "./component/Employee_details/EmployeeDashboard";

function App() {
  return (
    <div className="App">
      {/* <Login></Login>
      <Register></Register> */}
      <EmployeeDashboard></EmployeeDashboard>
    </div>
  );
}

export default App;
