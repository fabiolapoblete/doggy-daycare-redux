import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import DogsPage from "./pages/DogsPage";
import DogSinglePage from "./pages/DogSinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/ourDogs" element={<DogsPage />} />
        <Route path="/ourDogs/:name" element={<DogSinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
