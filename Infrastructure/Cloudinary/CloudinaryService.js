const CloudinaryConfig = require("./CloudinaryConfig")
const cloudinary = require('cloudinary').v2
module.exports = class CloudinaryService{

    constructor(){
        CloudinaryConfig()
    }

    static async uploadImage(imagePath){
        try {
            const result = await cloudinary.uploader.upload(imagePath);
            return {
                public_id: result.public_id,
                url:result.secure_url
            };
        } catch (error) {
            throw new Error(e.message)
        }
    }




}