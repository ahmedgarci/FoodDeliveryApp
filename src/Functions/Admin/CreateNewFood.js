import { PostData } from "../Common/PostDataToBackend"


async function CreateNewFood({data}){
        const {response,error}  = await PostData({
                url:"http://localhost:3500/food",
                data})

        return {
                response:response,
                error:error
        }

}

export default  CreateNewFood