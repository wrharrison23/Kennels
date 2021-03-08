import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useParams, useHistory } from "react-router-dom";

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext);

  const [location, setLocation] = useState({});

  const { locationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId);
    getLocationById(locationId).then((response) => {
      console.log(response)
      setLocation(response);
    });
  }, []);
  
  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Location: {location.address}</div>
      <h4>Employees</h4>
      <div className="location__employees">
        {location.employees?.map((employee, index, { length }) => {
          if (index + 1 === length) {
            return `${employee.name}`;
          } else {
            return `${employee.name}, `;
          }
        })}
      </div>
      <h4>Animals</h4>
      <div className="location__animals">
        {location.animals?.map((animal, index, { length }) => {
          if (index + 1 === length) {
            return `${animal.name}`;
          } else {
            return `${animal.name}, `;
          }
        })}
      </div>
      <button
        onClick={() => {
          history.push(`/locations/edit/${location.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};

  // const createChildString = (child) => {
  //   let childString = "";
  //   for (let i = 0; i < child.length; i++) {
  //     if (i < child.length - 1) {
  //       childString += `${child[i].name}, `;
  //     } else {
  //       childString += `${child[i].name}`;
  //     }
  //   }
  //   return childString;
  // };


