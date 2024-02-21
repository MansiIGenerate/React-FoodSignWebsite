import { useContext, useState, useEffect } from "react";
import { Contextapp } from "../Context/ContextFood";
import { useNavigate } from "react-router-dom";
import"../../Asset/styles/Cart.css";
import NevbarFood from "../Navbar/NevbarFood";
const CartFood = () => {
    const navitem = useNavigate()
    const { cartitem, addtocard, setcaritem } = useContext(Contextapp);
    const [totalamount, settotalamount] = useState(0);

    useEffect(() => {
        let total = 0
        cartitem.forEach((item) => {
            total += Number(item.price * item.count)
        })
        settotalamount(total);
    }, [cartitem]);

    const removeitem = (id) => {
        const updateitem = cartitem.map((item) => {
            if (item.id === id && item.count > 1) {
                return {
                    ...item,
                    count: item.count - 1,
                }
            }
            else if (item.id === id && item.count <= 1) {
                return null;
            }
            return item;
        })
        const filtercart = updateitem.filter((item) => item !== null)
        setcaritem(filtercart);
    }

    return (
        <>
            <NevbarFood />
            <div className="cart-containerr">
                <h1>cart</h1>
                {cartitem.length === 0 ? "cart empaty" : (
                    <div className="cart-wrapperr">
                        {cartitem.map((item) => (
                            <div key={item.id} className="cartt">
                                <img className="imagee" src={item.image} alt="" />
                                <div className="dett">
                                    <p>{item.name}</p>
                                    <div className="add-remove-buttonn">
                                        <button onClick={() => removeitem(item.id)}>-</button>
                                        <input type="text" value={item.count}></input>
                                        <button onClick={() => addtocard(item)}>+</button>
                                    </div>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        ))}
                        <p>total item ${totalamount}</p>
                    </div>
                )}
                <div className="buttonss">
                    {cartitem.length !== 0 && (
                        <button className="check-out-btnn">check out item</button>
                    )}
                    <button onClick={() => navitem("/homefood")} className="back-btnn">continue item</button>
                </div>
            </div>
        </>
    );
};
export default CartFood;