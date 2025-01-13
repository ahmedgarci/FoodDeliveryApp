import { createContext, useState } from "react";
import { POST } from "../Services/Common/POST";

const cartContext = createContext();

function CartContextProvider({ children }) {
  const [foodsInCart, setFoodsInCart] = useState([]);
  const [itemsNumber, setItemsNumber] = useState(0);
  const [cartId, setCartId] = useState("67570bb0da1b343b39cbfc3b");

  async function addFoodToCart(id, image, price, name) {
    const isFound = foodsInCart.some((food) => food.id === id);

    if (!isFound) {
      setFoodsInCart((prevFoods) => [
        ...prevFoods,
        { id, quantity: 1, image, price, name },
      ]);
      setItemsNumber((prevCount) => prevCount + 1);
    }

    try {
      const { error, response } = await POST({
        url: `http://localhost:3500/Cart/add/${cartId}`,
        data: { FoodId: id },
      });

      if (error) {
        alert(error);
      } else {
        setCartId(response.data);
      }
    } catch (e) {
      alert("Can't add item to your cart.");
    }
  }

  function deleteFood(id) {
    setFoodsInCart((prevFoods) => prevFoods.filter((food) => food.id !== id));
    setItemsNumber((prevCount) => Math.max(0, prevCount - 1));
  }

  function checkIfFoodAlreadyInCart(id) {
    return foodsInCart.some((item) => item.id === id);
  }

  function calculateSum() {
    return foodsInCart.reduce((sum, food) => sum + food.price * food.quantity, 0);
  }

  const ExportedFunctions = {
    cartId,
    itemsNumber,
    foodsInCart,
    deleteFood,
    addFoodToCart,
    calculateSum,
    checkIfFoodAlreadyInCart,
  };

  return (
    <cartContext.Provider value={ExportedFunctions}>
      {children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };
