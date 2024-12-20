import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toast } from "@radix-ui/react-toast";
import { Toaster } from "./components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* Cung cấp khả năng truy cập đến store */}
    <Provider store={store}>
      {" "}
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>
);
