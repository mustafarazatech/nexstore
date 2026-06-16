import { Route, Routes } from "react-router-dom";
import { Slide, ToastContainer, Zoom } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import AdminRoute from "./routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddCategory from "./pages/admin/AddCategory";
import CategoryList from "./pages/admin/CategoryList";
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/ProductList";
import ProductDetails from "./pages/ProductDetails";
import ProductCategory from "./pages/ProductCategory";
import UserDashboard from "./pages/user/UserDashboard";
import UserProfile from "./pages/user/UserProfile";
import UserAddress from "./pages/user/UserAddress";
import UserWishlist from "./components/user/UserWhistlist";
import UserOrder from "./pages/user/UserOrder";
import UserSetting from "./pages/user/UserSetting";
import UserHelp from "./pages/user/UserHelp";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-category/:id" element={<ProductCategory />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-address" element={<UserAddress />} />
        <Route path="/user-whislist" element={<UserWishlist />} />
        <Route path="/user-order" element={<UserOrder />} />
        <Route path="/user-setting" element={<UserSetting />} />
        <Route path="/user-help" element={<UserHelp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
