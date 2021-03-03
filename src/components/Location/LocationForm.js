import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/LocationProvider";
import "./Location.css";
import { useHistory } from "react-router-dom";

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext);
  const { locations, getLocations } = useContext(LocationContext);

  /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */

  const [location, setLocation] = useState({
    name: "",
    address: ""
  });

  const history = useHistory();

  /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
  useEffect(() => {
    getLocations();
  }, []);

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
    const newLocation = { ...location };
    /* Location is an object with properties.
      Set the property to the new value
      using object bracket notation. */
    newLocation[event.target.id] = event.target.value;

    setLocation(newLocation);
  };

  const handleClickSaveLocation = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    

    const locationName = location.name
    const locationAddress = location.address
    if (locationName === null || locationAddress === null) {
      window.alert("Please input a location");
    } else {
      //invoke addLocation passing location as an argument.
      //once complete, change the url and display the location list
      addLocation(location).then(() => history.push("/locations"));
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name: </label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            value={location.name}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location address: </label>
          <input
            type="text"
            id="address"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Location address"
            value={location.address}
          />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Add Location
      </button>
    </form>
  );
};
