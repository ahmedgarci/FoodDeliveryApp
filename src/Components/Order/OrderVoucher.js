import { useContext } from "react"
import { cartContext } from "../../Functions/Hooks/useContext/CartContext"


function Voucher(){
    const {calculateSum} = useContext(cartContext)
    return(
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
          <span className="text-lg font-semibold text-gray-800">{calculateSum()}</span>
        </div>
        <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Passer la commande
        </button>
      </div>
    )
}
export {Voucher}