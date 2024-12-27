import React, { useState } from "react";
import FetchDataComponent from "../../Functions/Hooks/useEffect/GetDataFromBackend";
import ErrorComponent from "../Common/ErrorComponent";
import LoadingComponent from "../Common/LoadingComponent";
import { DeleteComponent } from "./Delete";
import { FoodModal } from "./Modal";

function Foods() {
  const { data, loading, error } = FetchDataComponent({
    url: "http://localhost:3500/food/all",
    method: "GET",
  });
  

  if (error) return <ErrorComponent error={error} />;
  if (loading) return <LoadingComponent />;

  return (
    <section id="food" className="mb-8"> 
      <h2 className="text-2xl font-semibold mb-4">Food</h2>
      <div className="bg-white p-6 rounded shadow">
        <FoodModal>Add Food</FoodModal>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Food Name</th>
              <th className="border-b p-4">Category</th>
              <th className="border-b p-4">Price</th>
              <th className="border-b p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((food) => (
                <tr key={food._id}>
                  <td>{food?.name}</td>
                  <td>{food?.categoryName?.name}</td>
                  <td>{food?.price}</td>
                  <td>
                    <DeleteComponent
                      Id={food._id}
                      Url={"http://localhost:3500/food/"}
/>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      
    </section>
  )
}

export { Foods };
