import "./App.css";
import { CustomNavbar } from "./Components/navbar/CustomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { Favourite } from "./pages/fav/Favourite";
import { Main } from "./pages/main/Main";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fav" element={<Favourite />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
