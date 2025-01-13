const { deleteCategory, getAllCategories } = require("../../Repositories/Category/CategoryRepository");
const AddCategory = require("../../UseCases/Category/AddCategory")

module.exports = class CategoryController{
    
    async CreateNewCategory(req,res){
        let {catName} = req.body
        try{
            await AddCategory(catName);
            return res.status(201).json({message:"category created"})
        }catch(e){
            return res.status(400).json({message:e.message})
        }
    }

    async deleteCategory(req,res){
        let {idCategory} = req.params
        try{
            await deleteCategory(idCategory)
            return res.status(200).json({message:"category deleted "})
        }catch(e){
            return res.status(400).json({error:e.message})
        }
    }

    async getAllCategories(req,res){
        try{
            const allCategories = await getAllCategories()
            return res.status(200).json({message:allCategories})
        }catch(e){
            return res.status(500).json({message:e.message})
        }
    }




}