import { NavLink,} from "react-router-dom"

function FoodCard({id,name,price,imageUrl}){

    
    return(            
        <>
            <NavLink to={"/food"} class="bg-white p-4 rounded shadow" state={{id,name,price,imageUrl}} >
            <img src={imageUrl} alt="Meal" className="w-full h-52  rounded object-cover"/>
                <p class="mt-4 font-semibold">{price}</p>
                <p class="text-gray-500">{name}</p>
            </NavLink>
        </>
    )
}

export {FoodCard}