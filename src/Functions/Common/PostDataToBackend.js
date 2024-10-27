import axios from "axios";

async function PostData({url,data,withCredentials}){
    const response =  await axios.post(url,data,{Credential:withCredentials})
    console.log(response);

}

export {PostData}