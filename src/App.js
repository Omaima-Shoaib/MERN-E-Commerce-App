import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {

  Route,
  Routes,
  BrowserRouter,
  Navigate,

} from "react-router-dom";
function App() {
  const user = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route
            path="/products/:category"
            element={<ProductList></ProductList>}
          ></Route>
          <Route path="/product/:id" element={<Product></Product>}></Route>
          <Route path="/login" element={user?<Navigate to='/'></Navigate>:<Login></Login>}></Route>
          <Route path="/register" element={user?<Navigate to='/'></Navigate>:<Register></Register>}></Route>
          {/* <Route path="/register" element={<Register></Register>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
