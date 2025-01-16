const  deleteCategory  = require("./useCase/DeleteCategory");
const AddCategory = require("./useCase/AddCategory")
const  GetAllCategoriesUseCase = require("./useCase/GetAllCategoriesUseCase")

module.exports = class CategoryController{
    
    async CreateNewCategory(req,res){
        let {catName} = req.body
        try{
            await AddCategory(catName);
            return res.status(201).json({message:"category created"})
        }catch(e){
            console.log(e);
            return res.status(400).json({error:e})
        }
    }

    async deleteCategory(req,res){
        let {idCategory} = req.params
        try{
            await deleteCategory(idCategory)
            return res.status(200).json({message:"category deleted "})
        }catch(e){
            console.log(e);
            return res.status(400).json({error:e.message})
        }
    }

    async getAllCategories(req,res){
        try{
            const allCategories = await GetAllCategoriesUseCase()
            return res.status(200).json({message:allCategories})
        }catch(e){
            return res.status(500).json({error:e.message})
        }
    }




}