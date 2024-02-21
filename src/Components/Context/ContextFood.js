import { createContext, useState } from "react";

export const Contextapp = createContext(null);

const ContextFood = (props) => {

    const [cartitem, setcaritem] = useState([]);
    const [added, setadded] = useState(null);

    const addtocard = (dish, key) => {
        setTimeout(() => {
            setadded(null);
        }, 600)
        setadded(key);
        const exitem = cartitem.find((item) => item.id === dish.id)
        if (exitem) {
            setcaritem((p) => p.map((item) =>
                item.id === dish.id ? { ...item, count: item.count + 1 } :
                    item
            ))
        
        }
        else {
            setcaritem([...cartitem, { ...dish, count: 1 }]);
        }
        // console.log(dish)
    };
    const values = { addtocard, cartitem, setcaritem, added }
    return (
        <>
            <Contextapp.Provider value={values}>{props.children}</Contextapp.Provider>
       </>
    )
};
export default ContextFood; 