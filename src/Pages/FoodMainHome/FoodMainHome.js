import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import FoodHome from "../../Components/Home/FoodHome";
import Menu from "../../Components/Menu/Menu";

function FoodMainHome() {
  return (
    <>
      <Routes>
        <Route
          path="/homefood"
          element={
            <>
              <FoodHome /> <Menu />
            </>
          }
        />
        <Route path="/homefood" element={<Menu />} />
      </Routes>
    </>
  );
}

export default FoodMainHome;
