import { DisplayAllOrderFood } from "../Components/Order/DisplayAllOrderFood";
import { Voucher } from "../Components/Order/OrderVoucher";

function OrderPage() { 
  return (
    <div className="container mx-auto mt-10 min-h-screen">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-3/4 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Articles dans le panier</h2>
          <div className="space-y-6">{DisplayAllOrderFood()}</div>
        </div>
        <Voucher/>      
      </div>
    </div>
  );
}

export { OrderPage };
