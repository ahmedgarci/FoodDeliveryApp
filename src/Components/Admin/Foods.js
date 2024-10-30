import FetchDataComponent from "../../Functions/Hooks/useEffect/GetDataFromBackend";
import ErrorComponent from "../Common/ErrorComponent";
import LoadingComponent from "../Common/LoadingComponent";

function Foods() {
  const { data, loading, error } = FetchDataComponent({
    url: "http://localhost:3500/food/all",
    method: "GET"
  });
  console.log(data);
  if (error) return <ErrorComponent />;
  if (loading) return <LoadingComponent />;

  return (
    <section id="food" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Food</h2>
      <div className="bg-white p-6 rounded shadow">
        <button
          className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
        >
          Add Food
        </button>
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
           
          </tbody>
        </table>
      </div>
    </section>
  );
}

export { Foods };
