import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationCard } from "./Location/LocationCard";
import { EmployeeCard } from "./Employee/EmployeeCard";
import { CustomerCard } from "./Customer/CustomerCard";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./Customer/CustomerProvider";
import { CustomerList } from "./Customer/CustomerList";
import { EmployeeProvider } from "./Employee/EmployeeProvider";
import { EmployeeList } from "./Employee/EmployeeList";
import { LocationProvider } from "./Location/LocationProvider";
import { LocationList } from "./Location/LocationList";
export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>
    </>
  );
};
