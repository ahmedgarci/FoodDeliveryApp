const UploadImageUseCase = require("../UseCases/Food/UploadImageUseCase");

class ImageController{
    static async uploadImage(req,res){
        const {file} = req;
        try{
        if(!file){throw new Error("file not found ! ")}      
        let { imageUrl,id} = await UploadImageUseCase(file.filename)
        
        return res.json({
            message:"uploaded successfully ",
            imageUrl,
            id
        })
        }catch(e){
            return res.json({message:e.message})
        }
    }
}

module.exports = ImageController;