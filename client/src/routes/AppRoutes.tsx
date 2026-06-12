import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";
import NotFound from "../pages/NotFound";
import AddCategory from "../pages/admin/AddCategory";
import CategoryList from "../pages/admin/CategoryList";
import AddProduct from "../pages/admin/AddProduct";
import ProductList from "../pages/admin/ProductList";

export const router = createBrowserRouter([
  // Website Routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "products", element: <Products /> },
      { path: "*", element: <NotFound /> },

      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "add-category",
        element: <AddCategory/>,
      },
      {
        path: "category-list",
        element: <CategoryList/>,
      },
      {
        path: "add-product",
        element: <AddProduct/>,
      },
      {
        path: "product-list",
        element: <ProductList/>,
      },
    ],
  },
]);
