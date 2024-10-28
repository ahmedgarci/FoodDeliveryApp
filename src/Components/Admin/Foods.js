function Foods(){
    return(
        <section id="food" class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Food</h2>
            <div class="bg-white p-6 rounded shadow">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="border-b p-4">Food Name</th>
                    <th class="border-b p-4">Category</th>
                    <th class="border-b p-4">Price</th>
                    <th class="border-b p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-b p-4">Margherita Pizza</td>
                    <td class="border-b p-4">Pizzas</td>
                    <td class="border-b p-4">$10</td>
                    <td class="border-b p-4">
                      <button class="text-blue-600 hover:underline">Edit</button>
                      <button class="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
    )
}
export {Foods}