import React from "react";
import { MenuList } from "../src/helpers/MenuList";
import MenuItem from "../src/components/MenuItem";

const Deals= () => {
  return (
    <div className="deal">
      <h1 className="dealTitle">Our Deals</h1>
      <div className="dealList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Deals;