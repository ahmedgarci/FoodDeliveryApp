const ValidateFoodRequestcreate = require("../../Infrastructure/RequestsValidation/FoodRequests/ValidateFoodRequestcreate")
const FoodRepository = require("../entities/FoodRepository")


module.exports = async({_name,_price,_description,_imageId,_Category})=>{
    try{
        ValidateFoodRequestcreate({name:_name,price:_price,description:_description})    
        return await FoodRepository.createNewFood({
            _name:_name,
            _price:_price,
            _description:_description,
            _imageId:_imageId
        })
    }catch(e){
        throw new Error(e.message)
    }


}