import axios from "axios";

async function PostData({url,data}){
    const response =  await axios.post(url,data,{withCredentials:true})
    console.log(response);

}

export {PostData}