import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { Link } from "react-router-dom";
const NevbarFood = () =>{
    return(
        <div className="navbarr">
            <div className="logo">
                <sapn>F</sapn>ood..
            </div>
            <ul className="menuu">
                <li><Link to="/homefood">home</Link></li>
            </ul>
            <div className="cart-icon">
                <Link to='/cart'>
                <AiOutlineShoppingCart className="cart-i"/>
                </Link>
            </div>
        </div>
    )
}
export default NevbarFood;