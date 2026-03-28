import { Routes, Route } from "react-router-dom";
import Login from "./login_view/login";
import Home from "./home_view/home";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;