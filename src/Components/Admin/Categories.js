function Categories(){
    return(
        <section id="category" class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Category</h2>
            <div class="bg-white p-6 rounded shadow">
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="border-b p-4">Category Name</th>
                    <th class="border-b p-4">Description</th>
                    <th class="border-b p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-b p-4">Pizzas</td>
                    <td class="border-b p-4">Various kinds of pizzas</td>
                    <td class="border-b ">
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
export {Categories}