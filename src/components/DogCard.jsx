import { Link } from "react-router-dom";
import "../styling/DogCard.css";
import { useState } from "react";

function DogCard({ dogData }) {
  // const [checkedIn, setCheckedIn] = useState("");
  // dogData.present ? setCheckedIn("checkedIn") : setCheckedIn("notCheckedIn");

  let present = "";
  dogData.present ? (present = "checkedIn") : (present = "notCheckedIn");

  return (
    <Link to={`/ourDogs/${dogData.name}`} state={{ dog: dogData }}>
      <article className="dogCard">
        <figure className="dogCard__img">
          <img src={dogData.img} alt="En bild" />
        </figure>
        <section className="dogCard__info">
          <section className="dogCard__info--upperRow">
            <section className="dogCard__info--name">
              <div className={present}></div>
              <h3>{dogData.name}</h3>
              <img src={dogData.genderIcon} alt="" />
            </section>
            <h3>{dogData.age} yr</h3>
          </section>
          {/* <p className="dogCard__info--breed">{dogData.breed}</p>
          <p className="dogCard__info--owner">Owner: {dogData.owner}</p> */}
        </section>
      </article>
    </Link>
  );
}

export default DogCard;
