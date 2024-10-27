import { OrderStages } from "../Components/Home/OrderStages"
import { LatestFoods } from "../Components/Home/Food/LatestFoods"
import ServicesOffered from "../Components/Common/Service"

function HomePage (){
    

    return(
        <div>    
    <section class="bg-yellow-500 text-white text-center py-12">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold">Are you starving?</h2>
      <p class="mt-4">Within a few clicks, find meals that you’ll love!</p>
      <div class="mt-8 flex justify-center">
        <input type="text" placeholder="Enter Your Address" class="p-3 rounded-l-md text-gray-700" />
        <button class="bg-red-600 p-3 rounded-r-md">Find Food</button>
      </div>
    </div>
  </section>
      

        <LatestFoods />
        <OrderStages />
 

  <section class="container mx-auto my-12">
    <h3 class="text-2xl font-semibold text-center mb-8">Popular Items</h3>
    <div class="grid grid-cols-5 gap-4">
      <div class="bg-white p-4 rounded shadow">
        <img src="https://via.placeholder.com/150" alt="Food Item" class="rounded" />
        <p class="mt-4 font-semibold">Cheese Burger</p>
        <p class="text-gray-500">$4.00</p>
        <button class="bg-yellow-500 text-white px-4 py-2 mt-4 rounded">Order Now</button>
      </div>
    </div>
  </section>

  <ServicesOffered/>

   
      </div>

    )
}

export {HomePage}