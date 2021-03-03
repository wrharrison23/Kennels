import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";
import { useHistory } from "react-router-dom";
export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext);
  const history = useHistory()
  /** 
   * 
  ** Equivalent :
  
  **  const LocationList = () => {
  **    getLocations()
  **      .then(() => {
  **        const locations = useLocations()
  **        render(locations)
  **      }
  **  }
    
*/
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
  }, []);

  /** 
  ** Equivalent :
  
  **  eventHub.addEventListener("locationStateChange", customEvent => {
  **      const locations = useLocations()
  **      console.log(locations)
  **    })
*/

  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      <button
        className="locationBtn"
        onClick={() => {
          history.push("/locations/create");
        }}
      >
        Add Location
      </button>
      {locations.map((location) => {
        return <LocationCard key={location.id} location={location} />;
      })}
    </div>
  );
};
