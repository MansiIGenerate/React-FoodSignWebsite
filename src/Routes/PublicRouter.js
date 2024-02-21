import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import AboutDetail from "../Components/Userdetail/AboutDetail";
import FoodMainDetail from "../Components/Restaurants/FoodMainDetail";
import CreateUserForm from "../Components/Usecurd/CreateUserForm";
import UpdateData from "../Components/Usecurd/UpdateData";
// import ReadUserData from "../Components/Usecurd/ReadUserData";
import ContextFood from "../Components/Context/ContextFood";
import CartFood from "../Components/FoodCart/CartFood";
import ReadTableCom from "../Components/Usecurd/ReadTableCom";
import RegisterPage from "../Pages/Auth/RegisterPage";
import FoodMainHome from "../Pages/FoodMainHome/FoodMainHome";

function PublicRouter() {
  return (
    <>
      <ContextFood>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/aboutdetail" element={<AboutDetail />} />
          <Route path="/homefood" element={<FoodMainHome />} />
          <Route path="/cart" element={<CartFood />} />
          <Route path="/Foodmaindetail" element={<FoodMainDetail />} />
          <Route path="/users" element={<CreateUserForm />} />
          <Route path="/update" element={<UpdateData />} />
          {/* <Route path="/read"  element={<ReadUserData/>}/> */}
          <Route path="/read" element={<ReadTableCom />} />
        </Routes>
      </ContextFood>
    </>
  );
}

export default PublicRouter;
