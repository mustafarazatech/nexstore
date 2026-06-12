import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CategoryProvider } from "./context/category/category.context.tsx";
import { ProductProvider } from "./context/product/product.context.tsx";
import { AuthProvider } from "./context/auth/auth.context.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  </BrowserRouter>,
);
