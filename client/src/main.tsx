import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CategoryProvider } from "./context/category/category.context.tsx";
import { ProductProvider } from "./context/product/product.context.tsx";
import { AuthProvider } from "./context/auth/auth.context.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart/cart.context.tsx";
import { ThemeProvider } from "./context/theme/theme.context.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <CategoryProvider>
          <ProductProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductProvider>
        </CategoryProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
