import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/firstpage/FirstPage";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import Basket from "../src/components/HomePage/components/Basket";
import PersonInform from '../src/components/HomePage/components/Navlog/user/PersonInform'
// Main App Component
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Basket" element={<Basket />} />
      <Route path="/PersonInform" element={<PersonInform />} />




      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Ensure this is only called once
root.render(<App />);
