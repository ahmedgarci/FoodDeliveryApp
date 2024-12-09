import { createContext, useState} from "react";


const cartContext = createContext()
function CartContextProvider({children}){

    const [foodsInCart,setFoodsInCart] = useState([])
    const [itemsNumber,setItemsNumer] = useState(0)

    function addFoodToCart(id,image,price,name){
        const isFound = foodsInCart.find(food=>food.id === id)
        if(!isFound){
            setFoodsInCart([...foodsInCart,{id,quantity:1,image:image,price:price,name:name}])
        }else{
            setFoodsInCart(foodsInCart.map(food=>{
                return food.id === id ? {...food,quantity:food.quantity+1} : food
            }))
        }
        setItemsNumer(foodsInCart.length)
    }

    function deleteFood(id){
        const filteredFoods = foodsInCart.filter(food=> food.id !== id)
        setFoodsInCart([filteredFoods])
    }


    function calculateSum(){
        let sum = 0;
        foodsInCart.map(food=>sum+=food.price)
        return sum;
    }



    const ExportedFunction = {
        itemsNumber,
        foodsInCart,
        deleteFood,
        addFoodToCart,
        calculateSum
    }




    return(
        <cartContext.Provider value={ExportedFunction}>
            {children}
        </cartContext.Provider>

    )
}

export {cartContext,CartContextProvider}