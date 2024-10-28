
function Statistique(){
    return(
        <section id="dashboard" class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">Total Orders</h3>
            <p class="text-2xl mt-2">1,245</p>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">Total Revenue</h3>
            <p class="text-2xl mt-2">$12,500</p>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">Active Users</h3>
            <p class="text-2xl mt-2">890</p>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">New Orders</h3>
            <p class="text-2xl mt-2">32</p>
          </div>
        </div>
      </section>   
    )
}
export {Statistique}