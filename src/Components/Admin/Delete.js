import React from "react";
import { DeleteDataFromBackend } from "../../Functions/Common/DeleteDataFromBackend";

function DeleteComponent({ Id , Url}) {

  const handleDelete = async () => {
    try {
      await DeleteDataFromBackend({
        url: Url,
        data: Id
      });
    } catch (error) {
      alert("error has occured")
    }
  };

  return (
    <button
      type="button"
      className="justify-self-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

export { DeleteComponent };
