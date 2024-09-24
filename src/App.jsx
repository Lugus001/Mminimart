import { PrimeReactProvider } from 'primereact/api';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmBasket from "../src/components/HomePage/components/ฺbasket/confirmBasket"
import CheckDelivery from '../src/components/HomePage/components/Navlog/user/CheckDelivery';
import OrderList from '../src/components/HomePage/components/Navlog/user/OrderList';
import PersonInform from '../src/components/HomePage/components/Navlog/user/Person/PersonInform'
import RemainingฺBalance from '../src/components/HomePage/components/Navlog/user/money/RemainingฺBalance';

import FirstPage from "./components/firstpage/FirstPage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/login/LoginPage";
import TopUp from "./components/HomePage/components/Navlog/user/money/TopUp";
import Basket from './components/HomePage/components/ฺbasket/Basket';
import { CartProvider } from './components/HomePage/components/ฺbasket/context/CartContext';


// Main App Component
export default function App() {
  return (
    <BrowserRouter>
    <PrimeReactProvider>
    <CartProvider>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/PersonInform" element={<PersonInform />} />
          <Route path="/CheckDelivery" element={<CheckDelivery />} />
          <Route path="/OrderList" element={<OrderList />} />
          <Route path="/RemainingฺBalance" element={<RemainingฺBalance />} />
          <Route path="/ConfirmBasket" element={<ConfirmBasket />} />
          <Route path="/TopUp" element={<TopUp />} />



          </Routes>
          </CartProvider>
      </PrimeReactProvider>

    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
