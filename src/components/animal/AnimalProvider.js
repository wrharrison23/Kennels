import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const AnimalContext = createContext();

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals?_expand=location")
      .then((res) => res.json())
      .then(setAnimals);
  };

  const addAnimal = (animal) => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then((response) => response.json())
};

  /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */

  const getAnimalById = (id) => {
    return fetch(
      `http://localhost:8088/animals/${id}?_expand=location&_expand=customer`
    ).then((res) => res.json());
  };

  return (
    <AnimalContext.Provider
      value={{
        animals,
        getAnimals,
        addAnimal,
        getAnimalById
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};
