import { useLocation } from "react-router"

function SingleFoodPage(){
    const location = useLocation()
    console.log(location);
    const {name,description,price,imageUrl}= location.state|| {}
    return(
        <div class="container mx-auto p-6">
          <div class="mb-6">
            <button class="text-gray-600 hover:text-gray-900 text-lg">
            </button>
          </div>
          
          <div class="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
            <div class="md:w-1/2">
              <img src={imageUrl} alt="Food Image" class="w-full h-full object-cover"/>
            </div>
      
            <div class="p-8 md:w-1/2">
              <h2 class="text-4xl font-semibold text-gray-800">{name}</h2>
              <p class="mt-4 text-gray-600">{description}</p>
              
              <div class="mt-6 text-2xl font-bold text-red-600">
                {price}
              </div>
      
              <div class="mt-6">
                <label for="quantity" class="block text-gray-700 font-medium">Quantity</label>
                <div class="flex items-center space-x-4 mt-2">
                  <input type="number" id="quantity" name="quantity" min="1" max="10" value="1" class="w-20 p-2 border rounded-md text-center"/>
                  <button class="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-green-700 font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
      
              <div class="mt-8">
                <h3 class="text-xl font-semibold text-gray-800">Nutritional Info</h3>
                <h2>This section will be for comments</h2>
              </div>
            </div>
          </div>
        </div>
    )
}
export {SingleFoodPage}