import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Dash from "./pages/Ds";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ProductList /> */}
      <Sidebar />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
