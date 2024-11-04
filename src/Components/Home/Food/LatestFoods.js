import FetchDataComponent from "../../../Functions/Hooks/useEffect/GetDataFromBackend"
import ErrorComponent from "../../Common/ErrorComponent"
import LoadingComponent from "../../Common/LoadingComponent"
import { FoodCard } from "./FoodCard"

function LatestFoods(){
    const {data,loading,error} = FetchDataComponent({url:"http://localhost:3500/food/all",method:"GET"})
    if(error)return ErrorComponent({error:error})
    if(loading) return LoadingComponent

    return(
        <section className="container mx-auto my-12">
        <h3 class="text-2xl font-semibold text-center mb-8">Discounted Meals</h3>
        <div className="grid grid-cols-5 gap-4 mx-3">
            {data && data.length > 0 &&
            data.map(foodElement =>{
                return FoodCard({
                    name: foodElement.name,
                    price: 19,
                    imageUrl:foodElement?.imageId?.imageUrl,
                    description:foodElement.description
                })
            })
            }
        </div>
        </section>
    )

}

export {LatestFoods}