import axios from "axios";

async function PostData({url,data}){
    try {
        const response = await axios.post(url,data, { withCredentials: true });
        return { response }; 
    } catch (e) {
        return { error: e.response?.data?.error };
    }

}

export {PostData}