import { useEffect, useState } from "react";
import FetchDataComponent from "../../Functions/Hooks/useEffect/GetDataFromBackend"
import ErrorComponent from "../Common/ErrorComponent";
import LoadingComponent from "../Common/LoadingComponent";

function Categories(){

  const {data,loading,error} =  FetchDataComponent({url:"http://localhost:3500/category",method:"GET"})
  const [categories,setCategories]= useState(data|| null)
  
  useEffect(()=>{
    setCategories(data)
  },[data])

  
  if (error) return <ErrorComponent  error={error}/>;
  if (loading) return <LoadingComponent />;
  
  return  (
    <section id="category" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Category</h2>
      <div className="bg-white p-6 rounded shadow">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Category Name</th>
              <th className="border-b p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories && categories.length > 0 && (
              categories.map((category) => (
                <tr key={category._id}>
                  <td className="border-b p-4">{category.name}</td>
                  <td className="border-b p-4">Actions here</td>
                </tr>
              )))
              } 
          </tbody>
        </table>
      </div>
    </section>
  );
}
export {Categories}