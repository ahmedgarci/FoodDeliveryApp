import { useContext } from "react";
import { cartContext } from "../Functions/Hooks/useContext/CartContext";

function OrderPage() {
  const { foodsInCart } = useContext(cartContext);

  const renderCartItems = () => {
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
              <label htmlFor={`quantity-${index}`} className="text-gray-700">Quantité: 1</label>
            </div>
            <p className="text-gray-800 font-semibold">Prix: {food.price}$</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto mt-10 min-h-screen">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-3/4 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Articles dans le panier</h2>
          <div className="space-y-6">{renderCartItems()}</div>
        </div>

        <div className="w-full md:w-1/4 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Récapitulatif de la commande</h2>
          <div className="flex justify-between py-2">
            <span className="text-gray-700">Sous-total</span>
            <span className="text-gray-800 font-semibold">36.00 €</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-700">Taxes</span>
            <span className="text-gray-800 font-semibold">3.60 €</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-lg font-semibold text-gray-800">Total</span>
            <span className="text-lg font-semibold text-gray-800">39.60 €</span>
          </div>
          <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  );
}

export { OrderPage };
