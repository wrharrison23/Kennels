import React, { useState, useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css";
import { useHistory } from "react-router-dom";
export const EmployeeList = () => {
  const { getEmployees, employees } = useContext(EmployeeContext);

  const history = useHistory();

  // Initialization effect hook -> Go get employee data
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <h1>Employees</h1>

      <button onClick={() => history.push("/employees/create")}>
        Add Employee
      </button>
      <div className="employees">
        {employees.map((employee) => {
          return <EmployeeCard key={employee.id} employee={employee} />;
        })}
      </div>
    </>
  );
};
