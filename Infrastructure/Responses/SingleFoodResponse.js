
class SingleFoodResponse{
    constructor(id,name,price,description,categoryName,imageUrl,comments){
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._categoryName = categoryName;
        this._imageUrl = imageUrl;
        this._comments = comments
    }


}

module.exports =  SingleFoodResponse
