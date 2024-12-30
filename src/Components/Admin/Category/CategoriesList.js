import {  useState } from "react"
import FetchDataComponent from "../../../Functions/Hooks/useEffect/GetDataFromBackend"
import LoadingComponent from "../../Common/Loading + Error/LoadingComponent"
import ErrorComponent from "../../Common/Loading + Error/ErrorComponent"

function CategoriesList({onCategorySelect}){
    const [categorySelected,setCategorySelected]= useState(null)

    function HandleCategoryChange(e){
        setCategorySelected(e.target.value)
        console.log(categorySelected);
        if(onCategorySelect){
            onCategorySelect(categorySelected);
        }
    }


    const {data,error,loading} = FetchDataComponent({url:"http://localhost:3500/category",method:"GET"})
    
    if(loading){<LoadingComponent />}
    if(error){<ErrorComponent  error={error}/>}
    
    return(
        
<form class="w-full py-3 mx-auto">
        <select id="countries" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e)=>HandleCategoryChange(e)}
        >
            {data && data.length > 0 && (
                data.map(item=>{
                    return <option id={item._id} value={item._id} >{item.name}</option>
                })
            )}
  </select>
</form>

    )



}

export {CategoriesList}