import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  /** 
  ** Equivalent :
  
  **  const EmployeeList = () => {
  **    getEmployees()
  **      .then(() => {
  **        const employees = useEmployees()
  **        render(employees)
  **      }
  **  }
    
*/
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  /** 
  ** Equivalent :
  
  **  eventHub.addEventListener("employeeStateChange", customEvent => {
  **      const employees = useEmployees()
  **      console.log(employees)
  **    })
*/
    const history = useHistory()
    
  return (
    <div className="employees">
      <button
        className="employeeBtn"
        onClick={() => {
          history.push("/employees/create");
        }}
      >
        Add Employee
      </button>
      {console.log("EmployeeList: Render", employees)}
      {employees.map((employee) => {
        return <EmployeeCard key={employee.id} employee={employee} />;
      })}
    </div>
  );
};
