function Users(){
    return(
        <section id="users" class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Users</h2>
        <div class="bg-white p-6 rounded shadow">
          <table class="w-full text-left">
            <thead>
              <tr>
                <th class="border-b p-4">Username</th>
                <th class="border-b p-4">Email</th>
                <th class="border-b p-4">Status</th>
                <th class="border-b p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b p-4">john_doe</td>
                <td class="border-b p-4">john@example.com</td>
                <td class="border-b p-4">Active</td>
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
export {Users}