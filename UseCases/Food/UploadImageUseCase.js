const ImageRepository = require("../../Repositories/Image/ImageRepository");
const CloudinaryService = require("../Infrastructure/Cloudinary/CloudinaryService");

module.exports = async(filePath)=>{
    try{
        let {public_id,url} =await CloudinaryService.uploadImage(filePath);
        let {imageUrl,id} = await ImageRepository.saveImage({_publicId:public_id,_secureUrl:url})
        return {
            imageUrl,id
        }
    }catch(e){
        throw new Error(e.message)
    }   
}
