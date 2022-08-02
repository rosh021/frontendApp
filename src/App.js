import "./App.css";
import { CustomNavbar } from "./Components/navbar/CustomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { Favourite } from "./pages/fav/Favourite";
import { Main } from "./pages/main/Main";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fav" element={<Favourite />} />
          <Route path="/:index" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
