import { FrappeProvider } from "frappe-react-sdk";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import NavHeader from "./components/NavHeader";
import Home from "./pages/Home";
import Product from "./pages/Product";
import './App.css'
import { useEffect } from "react";
import { ProductsProvider } from "./hooks/useProducts";
import { CartProvider } from "./hooks/useCart";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import { UserProvider } from "./hooks/useUser";
import { getToken } from "./utils/helper";
import BankInfoPage from "./pages/BankInfoPage";
import LoyaltyProgram from "./pages/LoyaltyProgram";
import MyAccount from "./pages/MyAccount";
import Consent from "./pages/Consent";
import TermsAndConditions from "./pages/TermsAndConditions";
import HowRedeemReward from "./pages/HowRedeemReward";
import MemberConditions from "./pages/MemberConditions";
import MyOrder from "./pages/MyOrder";
import MyOrderDetails from "./pages/MyOrderDetails";
import RewardHistory from "./pages/RewardHistory";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <FrappeProvider url={import.meta.env.VITE_ERP_URL}
      enableSocket={false}
      tokenParams={{
        type: "token",
        useToken: true,
        token: getToken,
      }}
    >
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/consent" element={<Consent />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
              <Route path="/how-to-collect-rewards" element={<HowRedeemReward />} />
              <Route path="/member-conditions" element={<MemberConditions />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/loyality-program" element={<LoyaltyProgram />} />
              <Route path="/thankyou" element={<BankInfoPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/my-account" element={<MyAccount />}/>
              <Route path="/my-order" element={<MyOrder />}/>
              <Route path="/my-order-details/:id" element={<MyOrderDetails />}/>
              <Route path="/reward-history" element={<RewardHistory />} />
            </Routes>
            <Cart />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </FrappeProvider>
  )
}

export default App
