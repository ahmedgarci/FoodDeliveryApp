
import React from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router";

function OrderSuccess() {
    const navigate = useNavigate()
   return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <Confetti  width={1200}  height={900} />
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Placed Successfully!
      </h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase (◕‿◕) Your order has been placed and is being processed.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default OrderSuccess;
