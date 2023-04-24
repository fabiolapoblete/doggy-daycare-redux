import { useLocation, useNavigate } from "react-router-dom";
import "../styling/DogSinglePage.css";

function DogSinglePage() {
  const location = useLocation();
  const dog = location.state.dog;

  const navigate = useNavigate();
  console.log(dog);

  const handleClick = () => {
    navigate("/ourDogs");
  };

  return (
    <main className="singleDog__container">
      <article className="singleDog__dogCard">
        <img
          className="singleDog__dogCard--img"
          src={dog.img}
          alt="Picture of a dog"
        />
        <ul className="singleDog__dogCard--info">
          <li>
            <section className="singleDog__dogCard--name">
              {dog.name}
              <img src={dog.genderIcon} alt="Gender icon" />
            </section>
          </li>
          <li>Age: {dog.age} years</li>
          <li>Breed: {dog.breed}</li>
          <li>Owner: {dog.owner}</li>
        </ul>
      </article>
      <button onClick={handleClick}>Back</button>
    </main>
  );
}

export default DogSinglePage;
