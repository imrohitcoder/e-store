import "./App.css";
import Products from "./components/Products";
import NavLink from "./navbar/NavLink";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      {/* <Products /> */}
      <Provider store={store}>
        <BrowserRouter>
          <NavLink />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
