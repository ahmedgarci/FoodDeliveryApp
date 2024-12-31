import { POST } from '../Common/POST';

async function Register(user){
        const {response,error} = await POST({
            url:"http://localhost:3500/register",
            data:{
                email:user.email,
                password:user.password,
                phone:user.phone,
                address:user.address,
                fullname:user.username
        },
           })
     
        return {
                response:response,
                error:error}

}

export {Register}

