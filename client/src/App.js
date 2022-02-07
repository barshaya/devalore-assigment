import Pets from './Pages/Pets/Pets';
import CreatePet from './Pages/createPet/CreatePet';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePet />} />
          <Route path="/pets" element={<Pets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
