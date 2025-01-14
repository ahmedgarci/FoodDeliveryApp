function OrderStages() {
  return (
    <section className="bg-gray-50 py-12 hidden sm:block">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8">How It Works</h3>
        <div class="grid grid-cols-4 gap-6">
          <div class="group bg-[#C27803]/20 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <div class="text-5xl text-yellow-500 transition-transform transform group-hover:scale-125">
              📌
            </div>
            <p class="mt-6 text-lg font-medium text-gray-700">Pick a Spot</p>
          </div>
          <div class="group bg-[#C27803]/20 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <div class="text-5xl text-yellow-500 transition-transform transform group-hover:scale-125">
              🛒
            </div>
            <p class="mt-6 text-lg font-medium text-gray-700">Place Order</p>
          </div>
          <div class="group bg-[#C27803]/20 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <div class="text-5xl text-yellow-500 transition-transform transform group-hover:scale-125">
              💰
            </div>
            <p class="mt-6 text-lg font-medium text-gray-700">Secure Payment</p>
          </div>
          <div class="group bg-[#C27803]/20 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <div class="text-5xl text-yellow-500 transition-transform transform group-hover:scale-125">
              🎉
            </div>
            <p class="mt-6 text-lg font-medium text-gray-700">
              Enjoy Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export { OrderStages };
