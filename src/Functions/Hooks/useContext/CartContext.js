import { createContext, useState} from "react";
import { PostData } from "../../Common/PostDataToBackend";


const cartContext = createContext()
function CartContextProvider({children}){

    const [foodsInCart,setFoodsInCart] = useState([])
    const [itemsNumber,setItemsNumer] = useState(0)
    const [cartId,setCartId] = useState("67570bb0da1b343b39cbfc3b")

    async function addFoodToCart(id,image,price,name){
        const isFound = foodsInCart.find(food=>food.id === id)
        if(!isFound){
            setFoodsInCart([...foodsInCart,{id,quantity:1,image:image,price:price,name:name}])
        }
        try{            
            const {error,response} = await PostData({url:`http://localhost:3500/Cart/add/${cartId}`,data:{FoodId:id}})
          //  console.log(response.data);
            error? console.log(error) : setCartId(response.data)           
        }catch(e){
            alert("can t add item to your cart ")
        }
        setItemsNumer(foodsInCart.length)
    }

    function deleteFood(id){
        const filteredFoods = foodsInCart.filter(food=> food.id !== id)
        setFoodsInCart([filteredFoods])
    }

    function checkIfFoodAlreadyInCart(id){
        let Exist =  foodsInCart.find(item => item.id === id)
        return Exist ? true : false
    }


    function calculateSum(){
        let sum = 0;
        foodsInCart.map(food=>sum+=food.price)
        return sum;
    }



    const ExportedFunction = {
        cartId,
        itemsNumber,
        foodsInCart,
        deleteFood,
        addFoodToCart,
        calculateSum,
        checkIfFoodAlreadyInCart
    }




    return(
        <cartContext.Provider value={ExportedFunction}>
            {children}
        </cartContext.Provider>

    )
}

export {cartContext,CartContextProvider}