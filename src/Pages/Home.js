import { OrderStages } from "../Components/Order/OrderStages"
import { LatestFood } from "../Components/Food/LatestFood"
import ServicesOffered from "../utils/Services"

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
      

        <LatestFood/>
        <OrderStages />
 

  <section class="container mx-auto my-12">
    <h3 class="text-2xl font-semibold text-center mb-8">Popular Items</h3>

  
         


  </section>

  <ServicesOffered/>
   
      </div>

    )
}

export {HomePage}