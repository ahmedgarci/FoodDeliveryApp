

function OrderStages(){

    return(
        <section class="bg-gray-50 py-12">
        <div class="container mx-auto text-center">
          <h3 class="text-2xl font-semibold mb-8">How does it work</h3>
          <div class="grid grid-cols-4 gap-4">
            <div>
              <div class="text-yellow-500 text-4xl">📍</div>
              <p class="mt-4">Select location</p>
            </div>
            <div>
              <div class="text-yellow-500 text-4xl">🍽️</div>
              <p class="mt-4">Choose order</p>
            </div>
            <div>
              <div class="text-yellow-500 text-4xl">💳</div>
              <p class="mt-4">Pay advanced</p>
            </div>
            <div>
              <div class="text-yellow-500 text-4xl">🍴</div>
              <p class="mt-4">Enjoy meals</p>
            </div>
          </div>
        </div>
      </section>
    )
}
export {OrderStages}