import axios from "axios";

async function POST({ url, data }) {
  try {
    const response = await axios.post(url, data, { withCredentials: true });

    return { response };
  } catch (e) {
    console.log(e);
    return { error: e.response?.data?.error };
  }
}

export { POST };
