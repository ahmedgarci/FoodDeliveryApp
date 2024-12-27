const food = require("../../Entities/FoodEntity")

module.exports = class FoodRepository{
    static async createNewFood({_name,_price,_description,_imageId,_categoryId}){
        try{
            // TO DO CATEGORY
            (await food.create({name:_name,Price:_price,
                description:_description,
                categoryName:_categoryId,
                imageId:_imageId
            })).save()
        }catch(e){
            throw new Error(e.message)
        }
    }

    static async deleteFood(id){
        try{
            await food.findByIdAndDelete(id).orFail(new Error("OOPS food not found !"))
        }catch(e){
            throw new Error(e.message)
        }
    }

    static async getAllFoods(){
        try{
            return await food.find({})
            .populate(["categoryName","imageId"])
            .select(["_id","name","Price","description","imageUrl"])
            ;
        }catch(e){
            throw new Error(e.message)
        }
    }

    static async getFoodById(id){
        try{
            return await food.findById(id)
            .populate(["categoryName","imageId"])
            .select(["_id","name","Price","description","imageUrl"])
            ;
        }catch(e){
            throw new Error(e.message)
        }
    }


}