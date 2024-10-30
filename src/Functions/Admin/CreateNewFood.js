import { PostData } from "../Common/PostDataToBackend"


async function CreateNewFood({data}){
        const x  = await PostData({url:"http://localhost:3500/food",data})
        console.log(x);
}

export default  CreateNewFood