import React from "react";
import { AnimalCard } from "./animal/AnimalCard";
import "./animal/Animal.css";
import "./Kennel.css"
import { LocationCard } from "./Location/LocationCard.js"
import { EmployeeCard } from "./Employee/EmployeeCard.js";
import { CustomerCard } from "./Customer/CustomerCard.js";
import {PropsAndState} from "./PropsAndState.js"
export const Kennel = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>
    <PropsAndState yourName={"Wes"} />
    <h2>Animals</h2>
    <article className="animals">
      <AnimalCard />
      <AnimalCard />
      <AnimalCard />
    </article>
    <h2>Employees</h2>
    <article className="employees">
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </article>
    <h2>Locations</h2>
    <article className="locations">
      <LocationCard />
      <LocationCard />
    </article>
    <h2>Customers</h2>
    <article className="customers">
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
    </article>
  </>
);
