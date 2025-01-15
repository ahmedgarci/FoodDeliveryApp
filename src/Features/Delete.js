import React from "react";
import { Delete } from "../Services/Admin/Delete";

function DeleteComponent({ Id, Url, DeleteFunction }) {
  const handleDelete = async () => {
    try {
      const { error } = await Delete({
        url: Url,
        data: Id,
      });
      if (error) {
        alert("An error occurred while deleting the item.");
      } else {
        DeleteFunction();
      }
    } catch (error) {
      alert("An error occurred while deleting the item.");
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
