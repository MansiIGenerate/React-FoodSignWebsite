import foodimg from "../../Asset/image/foodimg.jpg";
import { Link } from "react-router-dom";
import NevbarFood from "../Navbar/NevbarFood";
const FoodHome =()=>{
    return(
        <>
        <NevbarFood/>
        <div className="containerr">
            <div className="left">
                <div className="text-contentt">
                    <h1>Food Menu</h1>
                    <p>From our over to your table,nothing but the best</p>
                    <button className="btnn">view menu  </button>
                </div>
            </div>
            <div className="right">
                <div className="image-containerr">
                    <img src={foodimg} alt="" className="pizza"></img>
                </div>
            </div>
        </div>
        </>
    )
   
};
export default FoodHome;