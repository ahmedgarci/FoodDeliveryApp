import axios from "axios";
// TO DO
async function PostData({url,data}){
    try {
        const response = await axios.post(url, data, { withCredentials: true });
        console.log(response);
        return { response }; 
    } catch (e) {
        return { error: e.response?.data?.error || "oops error has occured" };
    }

}

export {PostData}