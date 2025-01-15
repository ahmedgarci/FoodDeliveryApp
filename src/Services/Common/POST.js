import axios from "axios";

async function POST({url,data}){
    try {
        console.log(url);
        console.log(data);
        const response = await axios.post(url,data, { withCredentials: true });
        console.log(response);
        return { response }; 
    } catch (e) {
        console.log(e);
        return { error: e.response?.data?.error };
    }

}

export {POST}