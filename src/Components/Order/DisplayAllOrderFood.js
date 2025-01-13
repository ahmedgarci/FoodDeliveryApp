import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { DeleteComponent } from "../../Features/Delete";

function DisplayAllOrderFood(){

        const { foodsInCart } = useContext(cartContext)

        if (!foodsInCart || foodsInCart.length === 0) {
          return <p className="text-gray-600">Pas de produit dans le panier</p>;
        }
    
        return foodsInCart.map((food, index) => (
          <div key={index} className="flex items-center border-b pb-6">
            <img src={food.image} alt={food.name} className="w-24 h-24 rounded-lg" />
            <div className="ml-4 w-full">
              <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
              <p className="text-gray-600">Description courte du plat</p>
              <div className="flex justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <label htmlFor={`quantity-${index}`} className="text-gray-700">Quantité: {food.quantity}</label>
                </div>
                <p className="text-gray-800 font-semibold">Prix: {food.price}$</p>
              </div>
              <DeleteComponent
              
              className="bg-red-600 text-white rounded-md"
               />

            </div>
          </div>
        ));
      };

      export {DisplayAllOrderFood}