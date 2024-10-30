
function OrderPage(){
    return(
        <div class="container mx-auto mt-10 h-screen">
        <div class="flex flex-col md:flex-row md:space-x-8">
    
          <div class="w-full md:w-3/4 bg-white p-6 shadow-md rounded-lg">
            <h2 class="text-xl font-semibold mb-6 text-gray-700">Articles dans le panier</h2>
            
            <div class="space-y-6">
              <div class="flex items-center border-b pb-6">
                <img src="https://via.placeholder.com/100" alt="Food item" class="w-24 h-24 rounded-lg"/>
                <div class="ml-4 w-full">
                  <h3 class="text-lg font-semibold text-gray-800">Nom du Plat</h3>
                  <p class="text-gray-600">Description courte du plat</p>
                  <div class="flex justify-between mt-2">
                    <div class="flex items-center space-x-2">
                      <label for="quantity" class="text-gray-700">Quantité:</label>
                      <input type="number" id="quantity" value="1" class="w-12 px-2 py-1 border rounded-lg text-center"/>
                    </div>
                    <p class="text-gray-800 font-semibold">Prix: 12.00 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="w-full md:w-1/4 bg-white p-6 shadow-md rounded-lg">
            <h2 class="text-xl font-semibold mb-4 text-gray-700">Récapitulatif de la commande</h2>
            <div class="flex justify-between py-2">
              <span class="text-gray-700">Sous-total</span>
              <span class="text-gray-800 font-semibold">36.00 €</span>
            </div>
            <div class="flex justify-between py-2 border-b">
              <span class="text-gray-700">Taxes</span>
              <span class="text-gray-800 font-semibold">3.60 €</span>
            </div>
            <div class="flex justify-between py-2">
              <span class="text-lg font-semibold text-gray-800">Total</span>
              <span class="text-lg font-semibold text-gray-800">39.60 €</span>
            </div>
            <button class="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
              Passer la commande
            </button>
          </div>
        </div>
      </div>
    )
}
export {OrderPage}