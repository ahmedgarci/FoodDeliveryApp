import { useEffect, useState } from "react";
import ErrorComponent from "../../Common/ErrorComponent";
import LoadingComponent from "../../Common/LoadingComponent";
import { CategoryModal } from "./Modal";
import { Fetch } from "../../../Hooks/Fetch";
import { DeleteComponent } from "../../../Features/Delete";

function Categories(){

  const {data,loading,error} =  Fetch({url:"http://localhost:3500/category",method:"GET"})
  const [categories,setCategories]= useState(data|| null)
  
  useEffect(()=>{
    setCategories(data)
  },[data])

  
  if (error) return <ErrorComponent  error={error}/>;
  if (loading) return <LoadingComponent />;
  
  return  (
    <section id="category" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Category</h2>
      <CategoryModal />
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
                  <td className="border-b p-4">
                    <DeleteComponent
                  Url={"http://localhost:3500/category/"}
                  Id={category._id}/> 
                  </td>
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