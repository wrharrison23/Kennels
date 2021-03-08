import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import { useHistory, useParams } from "react-router-dom";

export const LocationForm = () => {
  const { addLocation, getLocationById, updateLocation, getLocations } = useContext(LocationContext);

  const [location, setLocation] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const { locationId } = useParams();

  const history = useHistory();


  const handleControlledInputChange = (event) => {
    const newLocation = { ...location };
  
    newLocation[event.target.name] = event.target.value;

    setLocation(newLocation);
  };

  const handleSaveLocation = () => {
    if (location.name === null) {
      window.alert("Please select a location");
    } else {
      setIsLoading(true);
      if (locationId) {
        updateLocation({
          id: location.id,
          name: location.name,
          address: location.address
        }).then(() => history.push(`/locations/detail/${location.id}`));
      } else {
        addLocation({
          name: location.name,
          address: location.address
        }).then(() => history.push("/locations"));
      }
    }
  };


    useEffect(() => {
      getLocations()
        .then(() => {
          if (locationId) {
            getLocationById(locationId).then((location) => {
              setLocation(location);
              setIsLoading(false);
            });
          } else {
            setIsLoading(false);
          }
        });
    }, []);



  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationName">Location name: </label>
          <input
            type="text"
            id="locationName"
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            onChange={handleControlledInputChange}
            defaultValue={location.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location address: </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            autoFocus
            className="form-control"
            placeholder="Location address"
            onChange={handleControlledInputChange}
            defaultValue={location.address}
          />
        </div>
      </fieldset>
      
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
          handleSaveLocation();
        }}
      >
        {location.id ? <>Save Location</> : <>Add Location</>}
      </button>
    </form>
  );
}
