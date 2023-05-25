import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";
import CustomerInfo from "./components/CustomerInfo";
import SingleCustomer from "./components/SingleCustomer";

function App() {
  const customers = [
    {
      firstName: "Yoruichi",
      lastName: "Shihouin",
      id: 0,
    },
    {
      firstName: "Mark",
      lastName: "Something idk",
      id: 1,
    },
    {
      firstName: "Dio",
      lastName: "Brando",
    },
  ];
  return (
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route path="/customers" element={<AppCustomers />}></Route>
      <Route path="/products" element={<AppProducts />}></Route>
      <Route
        path="/customers/:id"
        element={<SingleCustomer customer={customers} />}
      ></Route>
    </Routes>
  );
}

export default App;
