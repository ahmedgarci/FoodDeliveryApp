import axios from "axios";


async function Delete({ url, data }) {
  try {
    const response = await axios.delete(`${url}${data}`, {
      withCredentials: true,
    });

    alert("deleted ")
    return response;
  } catch (e) {
    alert(e)
  }
}

export { Delete };
