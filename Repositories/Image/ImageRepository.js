const image = require("../../Entities/ImageEntity")

module.exports = class ImageRepository{
    
    static async saveImage({_publicId,_secureUrl}){
        try{
            let image = await image.create({
                publicId:_publicId,
                imageUrl:_secureUrl
            })
            await image.save();
            return {
                imageUrl: _secureUrl,
                id:image._id
            };
        }catch(e){
            throw new Error("error while saving the image")
        }
       
    }


}