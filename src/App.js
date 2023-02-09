import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";

import "./App.css";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <div
          style={{
            display: "flex",
          }}
        >
          <Sidebar />
          <ProductList />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
