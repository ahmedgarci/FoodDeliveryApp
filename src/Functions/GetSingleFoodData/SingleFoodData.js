import FetchDataComponent from "../Hooks/useEffect/GetDataFromBackend";

async function getSingleFoodData(FoodId){
    const {data , loading , error} = await FetchDataComponent({url:`http://localhost:3500//food/${FoodId}`,method:"GET"}) 
    return{
        data , loading , error
    }
}

export {getSingleFoodData}