import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/navbar/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
