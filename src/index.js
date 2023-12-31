import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./Pages/UserAuthContext/UserAuthContext";
import { WishListContextProvider } from "./Pages/WishListContext/WishListContext";
import { ProductsContextProvider } from "./Pages/ProductsContext/ProductsContext";
import { FilterContextProvider } from "./Pages/FilterContext/FilterContext";
import { CartListContextProvider } from "./Pages/CartContext/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <WishListContextProvider>
          <ProductsContextProvider>
            <FilterContextProvider>
              <CartListContextProvider>
                <App />
              </CartListContextProvider>
            </FilterContextProvider>
          </ProductsContextProvider>
        </WishListContextProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
