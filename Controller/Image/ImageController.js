const UploadImageUseCase = require("../../UseCases/Food/UploadImageUseCase");

class ImageController{

     async uploadImage(req,res){
        const {file} = req;      
        try{
        if(!file){throw new Error("file not found ! ")}      
        let { imageUrl,id} = await UploadImageUseCase(file.path)    
        return res.json({
            message:"uploaded successfully ",
            imageUrl,
            id
        })
        }catch(e){
            console.log(e);
            return res.json({message:e.message})
        }
    }
}

module.exports = ImageController;