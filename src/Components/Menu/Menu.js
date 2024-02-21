import { useContext, useRef, useState } from "react";
import React, { useEffect } from "react";
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { motion } from "framer-motion";
import data from "../../Data/data.json";
import { Contextapp } from "../Context/ContextFood";
import "../../Asset/styles/Food.css";
const Menu = () => {
  // console.log(data);
  let menu = Object.getOwnPropertyNames(data);

  const [selected, setselected] = useState(0);
  // const [selectdish, setselectdish] = useState("pizza");
  const [selectdish, setselectdish] = useState("pizza");
  const [width, setwidth] = useState(0);
  const slide = useRef(null);
  const innerslide = useRef(null);

  // const { addtocard, cartitem, added } = useContext(Contextapp);

  const { addtocard, added } = useContext(Contextapp);

  useEffect(() => {
    data[selectdish].forEach((item) => {
      item.id = item.id + item.name[0] + item.name[1];
    });
    setwidth(slide.current.scrollWidth - slide.current.offsetWidth);
    setTimeout(() => {
      innerslide.current.style.transform = "translateX(0)";
    }, 5);
  }, [selectdish]);

  const handleClick = (item, key) => {
    setselected(key);
    setselectdish(item);
    setTimeout(() => {
      innerslide.current.style.transform = "translateX(0)";
    }, 5);

    console.log(item);
    // console.log(cartitem);
  };
  return (
    <>
      <div className="wrapperr">
        <h1 className="titlee">Menu</h1>
        <div className="menu-list-wrapperr">
          <div className="menu-listt">
            {menu.map((item, key) => (
              <div
                key={key}
                onClick={() => handleClick(item)}
                className={
                  selected === key ? "item-container active" : "item-container"
                }
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="food-wrapper">
          <motion.div
            ref={slide}
            whileTap={{ cursor: "grabbing" }}
            className="piza-wrapperr"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: width, left: -width }}
              className="piza-containerr"
              ref={innerslide}
            >
              {data[selectdish].map((dish, key) => (
                <motion.div key={dish.id} className="piza-img-containerr">
                  {console.log(dish)}
                  <motion.img
                    className="piza-imgg"
                    src={dish.image}
                    alt=""
                  ></motion.img>
                  <h4 className="name">{dish.name}</h4>
                  <p className="descriptionn">{dish.description}</p>
                  <div className="detailss">
                    <p>
                      spicy:
                      {dish.spicy ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose />
                      )}
                    </p>
                    <p>
                      vegetarian:
                      {dish.vegetarian ? (
                        <AiOutlineCheck style={{ color: "green" }} />
                      ) : (
                        <AiOutlineClose />
                      )}
                    </p>
                  </div>
                  <button
                    onClick={() => addtocard(dish, key)}
                    className="btnn btn-addd"
                  >
                    add to card
                  </button>
                  {added === key ? "added" : "adde to card"}
                </motion.div>
                // <p>{dish.name}</p>
                // <p>{dish.price}</p>
                //  </>)}
                //  </>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Menu;
