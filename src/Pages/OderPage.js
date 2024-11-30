import { useContext } from "react";
import { cartContext } from "../Functions/Hooks/useContext/CartContext";
import { Voucher } from "../Components/Order/OrderVoucher";

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
        <Voucher/>
      
      </div>
    </div>
  );
}

export { OrderPage };
