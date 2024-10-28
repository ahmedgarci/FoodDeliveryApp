import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';


function Admin(){    

    return(
        <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
          <div className="p-6">
            <h1 className="text-2xl font-semibold">Food Delivery Admin</h1>
          </div>
    
          <nav className=" flex-1 px-4 space-y-2">
            <NavLink to="/admin/stat" className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</NavLink>
            <NavLink to="/admin/categories" className="block px-4 py-2 rounded hover:bg-gray-700">Category</NavLink>
            <NavLink to="/admin/users" className="block px-4 py-2 rounded hover:bg-gray-700">Users</NavLink>
            <NavLink to="/admin/food" className="block px-4 py-2 rounded hover:bg-gray-700">Food</NavLink>
          </nav>
    
          
        </aside>
        <main className="flex-1 p-6">
           <Outlet/>      
        </main>
      </div>
    )
}

export {Admin}