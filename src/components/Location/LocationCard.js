import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";
export const LocationCard = ({ location }) => (
  <section className="location">
    <h3 className="location__name">
      <Link to={`/locations/detail/${location.id}`}>{location.name}</Link>
    </h3>
    <div className="location__address">
      <strong>Address:</strong> {location.address}
    </div>
    <div className="location__employees">
      {checkPluralEmployees(location.employees)}
    </div>
    <div className="location__employees">
      {checkPluralAnimals(location.animals)}
    </div>
  </section>
);

const checkPluralEmployees = (child) => {
  if (child.length > 1) {
    return `${child.length} employees`
  } else {
    return `1 employee`
  }
}

const checkPluralAnimals = (child) => {
  if (child.length > 1) {
    return `${child.length} animals`;
  } else {
    return `1 animal`;
  }
};