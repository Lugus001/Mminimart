import { PrimeReactProvider } from 'primereact/api';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "../src/components/HomePage/components/Basket";

import PersonInform from '../src/components/HomePage/components/Navlog/user/PersonInform';
import CheckDelivery from '../src/components/HomePage/components/Navlog/user/CheckDelivery';
import OrderList from '../src/components/HomePage/components/Navlog/user/OrderList';
import RemainingฺBalance from '../src/components/HomePage/components/Navlog/user/remainingฺBalance';

import FirstPage from "./components/firstpage/FirstPage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/login/LoginPage";

// Main App Component
export default function App() {
  return (
    <BrowserRouter>
      <PrimeReactProvider>

        <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/PersonInform" element={<PersonInform />} />
        <Route path="/CheckDelivery" element={<CheckDelivery />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/RemainingฺBalance" element={<RemainingฺBalance />} />



      </Routes>

      </PrimeReactProvider>

    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Ensure this is only called once
root.render(<App />);
