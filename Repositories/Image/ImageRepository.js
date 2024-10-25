const image = require("../../Entities/ImageEntity");

module.exports = class ImageRepository{
    
    static async saveImage({_publicId,_secureUrl}){
        try{
            let createdImage = await image.create({
                publicId:_publicId,
                imageUrl:_secureUrl
            })
            await createdImage.save();
            return {
                id:createdImage._id,
                imageUrl: _secureUrl,
                
            };
        }catch(e){
            throw new Error("error while saving the image")
        }
       
    }


}