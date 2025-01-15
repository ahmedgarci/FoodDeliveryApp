import React, { useEffect, useState } from "react";
import ErrorComponent from "../Common/ErrorComponent";
import LoadingComponent from "../Common/LoadingComponent";
import { FoodModal } from "./Modal";
import { Fetch } from "../../Hooks/Fetch";
import { DeleteComponent } from "../../Features/Delete";

function Foods() {
  const { data, loading, error } = Fetch({
    url: "http://localhost:3500/food/all",
    method: "GET",
  });
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    if (data) {
      setFetchedData(data);
    }
  }, [data]);

  const handleDelete = (id) => {
    setFetchedData((prevData) => prevData.filter((item) => item._id !== id));
  };

  if (error) return <ErrorComponent error={error} />;
  if (loading) return <LoadingComponent />;

  return (
    <section id="food" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Food</h2>
      <div className="bg-white p-6 rounded shadow">
        <FoodModal>Add Food</FoodModal>
        <table className="w-full text-left">
          <thead>
            <tr className="text-center border-b p-4">
              <th > Name</th>
              <th >Category</th>
              <th >Price</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.length > 0 ? (
              fetchedData.map((food) => (
                <tr key={food._id} className="text-center">
                  <td>{food?.name}</td>
                  <td>{food?.categoryName?.name}</td>
                  <td>{food?.Price}</td>
                  <td>
                    <DeleteComponent
                      Id={food._id}
                      Url={"http://localhost:3500/food/"}
                      DeleteFunction={() => handleDelete(food._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No foods available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export { Foods };
