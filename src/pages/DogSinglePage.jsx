import { useLocation } from "react-router-dom";
import "../styling/DogSinglePage.css";

function DogSinglePage() {
  const location = useLocation();
  const dog = location.state.dog;
  console.log(dog);

  return (
    <main className="singleDog__container">
      <figure className="singleDog__img">
        <img src={dog.img} alt="A dog" />
      </figure>
      <section className="singleDog__name">
        <h1>{dog.name}</h1>
      </section>
      <section className="singleDog__info">
        <h3 className="singleDog__info--header">This is {dog.name} :</h3>
        <section className="singleDog__info--details">
          <p>
            <b>Age:</b> {dog.age} years
          </p>
          <p>
            <b>Gender:</b> {dog.gender}
          </p>
          <p>
            <b>Breed:</b> {dog.breed}
          </p>
          <p>
            <b>Owner:</b> {dog.owner}
          </p>
        </section>
      </section>
    </main>
  );
}

export default DogSinglePage;
