
import Cart from "../FoodCart/CartFood"
import ContextFood from '../Context/ContextFood';
import Home from '../Home/FoodHome';
import Menu from '../Menu/Menu';
import Nevbar from '../Navbar/NevbarFood';
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function FoodMainDetail() {
  return (
    <div>
      <ContextFood>
      <Router>
      <Nevbar/>
     <Routes>
      <Route path='/homefood'  element={ <><Home/> <Menu/></>}/>
      <Route path='/cart'  element={<Cart/>}/>
      </Routes>
      </Router>
      </ContextFood>
      
    </div>
  );
}

export default  FoodMainDetail;



