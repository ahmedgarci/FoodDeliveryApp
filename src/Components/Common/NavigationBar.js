import { NavLink } from "react-router-dom";

function NavigationBar(){
    return(
        <header class="bg-white shadow">
        <div class="container mx-auto flex justify-between items-center p-4">
            <h1 class="text-2xl font-bold text-yellow-600">Foodwagon</h1>
            <div class="flex space-x-4">
                <NavLink to={"/"} class="text-gray-700">Home</NavLink>
                <NavLink href="#" class="text-gray-700">Search Food</NavLink>
                <NavLink to={"/auth"} className="text-yellow-600 font-semibold">Login</NavLink>
            </div>
        </div>
  </header>
    )
}
export {NavigationBar}