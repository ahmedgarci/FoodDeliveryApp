import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import Cookies from "js-cookie";

const name = () => {
  const name = Cookies.get("name");

  if (!name) {
    return "Login";
  } else {
    return name;
  }
};

const role = () => {
  const r = Cookies.get("role");

  if (r === "ADMIN") {
    return false;
  } else {
    return true;
  }
};

function NavigationBar() {
  const { itemsNumber } = useContext(cartContext);

  return (
    <header class="bg-white shadow" style={{ scrollBehavior: "smooth" }}>
      <div class="container mx-auto flex justify-between items-center p-4">
        <h1 class="text-2xl font-bold text-yellow-600">Food Delivery</h1>
        <div class="flex space-x-4" >
          <NavLink to={"/"} class="text-gray-700">
            Home
          </NavLink>
          <NavLink href="#pop" class="text-gray-700">
            Search Food
          </NavLink>
          <NavLink to={"/order"} class="text-gray-700">
            Cart({itemsNumber})
          </NavLink>
          <i><NavLink to={"/auth"} className="text-yellow-600 font-semibold bold flex" ><p class="text-gray-700 pr-2">Welcome</p>
              {name()}  👋!
          </NavLink></i>
          {role() ? (
            <></>
          ) : (
            <NavLink to={"/admin"} className="text-yellow-900 font-semibold">
              ADMIN PAGE
            </NavLink>
          )}
        </div>
        
      </div>
    </header>
  );
}

export { NavigationBar };
