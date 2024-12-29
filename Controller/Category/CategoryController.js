const { deleteCategory, getAllCategories } = require("../../Repositories/Category/CategoryRepository");
const AddCategory = require("../../UseCases/Category/AddCategory")

module.exports = class CategoryController{
    
    async CreateNewCategory(req,res){
        let {catName} = req.body
        try{
            await AddCategory(catName);
            return res.json({message:"category created"})
        }catch(e){
            console.log(e);
            return res.json({message:e.message})
        }
    }

    async deleteCategory(req,res){
        let {idCategory} = req.params
        console.log(idCategory);
        try{
            await deleteCategory(idCategory)
            return res.json({message:"category deleted "})
        }catch(e){
            return res.status(403).json({error:e.message})
        }
    }

    async getAllCategories(req,res){
        try{
            const allCategories = await getAllCategories()
            return res.json({message:allCategories})
        }catch(e){
            return res.json({message:e.message})
        }
    }




}