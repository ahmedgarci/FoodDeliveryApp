import { POST } from "../Services/Common/POST";

async function uploadFoodImage(file) {    
    const formData = new FormData();
    formData.append("image", file);
    const { response, error } = await POST({ url: "http://localhost:3500/food/image/upload", data: formData });
    
    return {response,error}
  
}

export {uploadFoodImage}