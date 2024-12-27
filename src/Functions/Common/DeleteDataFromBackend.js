import axios from "axios";
import { Toast } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

async function DeleteDataFromBackend({ url, data, handleToast }) {
  try {
    console.log(data);
    const response = await axios.delete(`${url}${data}`, {
      withCredentials: true,
    });

    handleToast("Item moved successfully.", "success");

    return response;
  } catch (e) {
    handleToast(
      e.response?.data?.error || "Oops, an error occurred.",
      "error"
    );
  }
}

export { DeleteDataFromBackend };
