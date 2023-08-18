import { FrappeProvider } from "frappe-react-sdk";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
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
import MyAccount from "./pages/MyAccount";
import ShippingAddress from "./pages/address/ShippingAddress";
import AddShippingAddress from "./pages/address/ShippingAddressAdd";
import EditShippingAddress from "./pages/address/ShippingAddressEdit";
import Welcome from "./pages/register/Welcome";
import Signup from "./pages/register/Signup";
import FillInfo from "./pages/register/FillInfo";
import Success from "./pages/register/Success";
import MyCoupon from "./pages/MyCoupon";
import MyOrder from "./pages/MyOrder";
import MyOrderDetails from "./pages/MyOrderDetails";
import MyID from "./pages/MyID";
import ProductCompare from "./pages/ProductCompare";
import EditProfile from "./pages/EditProfile";
import CategoryPage from "./pages/CategoryPage";
import ShopPage from "./pages/ShopPage";
import ShopPageFilter from "./pages/ShopPage-filter";
import ShopPageType from "./pages/ShopPage-type";
import Wishlist from "./pages/Wishlist";
import RewardPage from "./pages/RewardPage";
import CollectPoints from "./pages/CollectPoints";
import TermsAndConditions from "./pages/TermsAndConditions";
import Consent from "./pages/Consent";
import HowRedeemReward from "./pages/HowRedeemReward";
import MemberConditions from "./pages/MemberConditions";

import BlogAdmin from "./pages/admin/BlogAdmin";
import BlogCategories from "./pages/admin/BlogCategories";
import BlogAdd from "./pages/admin/BlogAdd";
import RewardDetails from "./pages/RewardDetails";
import RewardCouponPage from "./pages/RewardCouponPage";
import ProductReward from "./pages/ProductReward";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, [navigate]);

  const location = useLocation();

  return (
    <FrappeProvider url={"https://dev.zaviago.com"}
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
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="product-reward/:id" element={<ProductReward />} />
              <Route path="product-compare/:id" element={<ProductCompare />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/collect-points" element={<CollectPoints />} />
              <Route path="/thankyou" element={<BankInfoPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/my-account" element={<MyAccount />}/>
              <Route path="/my-id" element={<MyID />}/>
              <Route path="/my-order" element={<MyOrder />}/>
              <Route path="/my-order-details/:id" element={<MyOrderDetails />}/>
              <Route path="/my-coupon" element={<MyCoupon />}/>
              <Route path="/welcome" element={<Welcome />}/>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/fill-info" element={<FillInfo />}/>
              <Route path="/success" element={<Success />}/>
              <Route path="/shipping-address" element={<ShippingAddress />}/>
              <Route path="/shipping-address/add" element={<AddShippingAddress />}/>
              <Route path="/shipping-address/edit" element={<EditShippingAddress />}/>
              <Route path="/edit-profile" element={<EditProfile />}/>
              <Route path="/categories" element={<CategoryPage />}/>
              <Route path="/shop" element={<ShopPage />}/>
              <Route path="/shop/filter" element={<ShopPageFilter />}/>
              <Route path="/shop/type" element={<ShopPageType />}/>
              <Route path="/wishlist" element={<Wishlist />}/>
              <Route path="/reward" element={<RewardPage />}/>
              <Route path="/reward-details" element={<RewardDetails />}/>
              <Route path="/reward-coupon" element={<RewardCouponPage />}/>
              <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
              <Route path="/consent" element={<Consent />}/>
              <Route path="/how-to-collect-rewards" element={<HowRedeemReward />} />
              <Route path="/member-conditions" element={<MemberConditions />} />

              <Route path="/blog-admin" element={<BlogAdmin />}/>
              <Route path="/blog-categories" element={<BlogCategories />} />
              <Route path="/blog-add" element={<BlogAdd />} />
            </Routes>
            <Cart />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </FrappeProvider>
  )
}

export default App