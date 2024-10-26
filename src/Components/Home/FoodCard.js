
function FoodCard({name,price}){

    return(            
        <section class="container mx-auto my-12">
            <h3 class="text-2xl font-semibold text-center mb-8">Discounted Meals</h3>
            <div class="grid grid-cols-5 gap-4">
            <div class="bg-white p-4 rounded shadow">
                <img src="https://via.placeholder.com/150" alt="Meal" class="rounded"/>
                <p class="mt-4 font-semibold">{price}</p>
                <p class="text-gray-500">{name}</p>
            </div>
        
        </div>
</section>
    )
}

export {FoodCard}