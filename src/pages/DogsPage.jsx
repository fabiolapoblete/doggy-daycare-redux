import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { filterDogs } from "../actions/filterDogs";
import { setDogs } from "../actions/setDogs";
import DogCard from "../components/DogCard";

import "../styling/DogsPage.css";

function DogsPage() {
  //Hämtar datan i store?
  const dogs = useSelector((state) => {
    return state.dogs;
  });

  //Skapar en kopia av datan i store för att kunna använda som default
  // const [originalDogs, setOriginalDogs] = useState(dogs);

  const dispatch = useDispatch();

  return (
    <article className="ourDogs">
      <header className="ourDogs__header">
        <h1>Our dogs</h1>
      </header>
      <main className="ourDogs__main">
        <select
          className="ourDogs__filter"
          onChange={(event) => {
            if (event.target.value == "2") {
              dispatch(filterDogs(dogs.filter((dog) => dog.present === true)));
            } else if (event.target.value == "1") {
              dispatch(setDogs());
            }
          }}
        >
          <option value="0">&#9947; Filter</option>
          <option value="1">All dogs</option>
          <option value="2">Present dogs</option>
        </select>
        <section className="dogCards__container">
          {/* Datan i store renderas ut när sidan mountas */}
          {dogs.map((dog, i) => (
            <DogCard dogData={dog} key={i} />
          ))}
        </section>
      </main>
    </article>
  );
}

export default DogsPage;
