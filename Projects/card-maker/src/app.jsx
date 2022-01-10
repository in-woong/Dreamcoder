import Login from "./components/login/login";
import Home from "./components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({ authService }) {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
