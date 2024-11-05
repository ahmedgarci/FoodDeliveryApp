import { createContext, useState} from "react";


const cartContext = createContext()
function CartContextProvider({children}){

    const [foodsInCart,setFoodsInCart] = useState([])



    function addFoodToCart(id){
        const isFound = foodsInCart.find(food=>food.id === id)
        if(!isFound){
            setFoodsInCart([...foodsInCart,{id,quantity:1}])
        }else{
            setFoodsInCart(foodsInCart.map(food=>{
                return food.id === id ? {...food,quantity:food.quantity+1} : food
            }))
        }
    }

    function deleteFood(id){
        const filteredFoods = foodsInCart.filter(food=> food.id !== id)
        setFoodsInCart([filteredFoods])
    }

    const ExportedFunction = {
        foodsInCart,
        deleteFood,
        addFoodToCart
    }




    return(
        <cartContext.Provider value={ExportedFunction}>
            {children}
        </cartContext.Provider>

    )
}

export {cartContext,CartContextProvider}