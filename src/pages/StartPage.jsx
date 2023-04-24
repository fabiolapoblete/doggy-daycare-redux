import { useNavigate } from "react-router-dom";
import "../styling/StartPage.css";

function StartPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ourDogs");
  };

  return (
    <main className="startPage">
      <header>
        <h1>
          <span>Welcome to</span> <span>doggy</span>
          <span>daycare!</span>
        </h1>
      </header>
      <button onClick={handleClick}>Our dogs</button>
    </main>
  );
}

export default StartPage;
