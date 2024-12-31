import { POST } from "../Common/POST"


async function CreateNewFood({data}){
        console.log(data);
        const {response,error}  = await POST({
                url:"http://localhost:3500/food",
                data})

        return {
                response,
                error
        }

}

export default  CreateNewFood