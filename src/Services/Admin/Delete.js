import axios from "axios";


async function Delete({ url, data }) {
  try {
    const response = await axios.delete(`${url}${data}`, {
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);

  }
}

export { Delete };
