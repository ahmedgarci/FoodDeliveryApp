
module.exports = ({FoodId,Comment})=>{
    if(!FoodId){
        throw new Error("Food id should not be empty ")
    }

    if(!Comment || Comment.trim().length === 0){
        throw new Error("comment should not be empty ")
    }

}