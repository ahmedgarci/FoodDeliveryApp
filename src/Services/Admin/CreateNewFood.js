import { POST } from "../Common/POST"


async function CreateNewFood({data}){
        const {response,error}  = await POST({
                url:"http://localhost:3500/food",
                data})

        return {
                response,
                error
        }

}

export default  CreateNewFood