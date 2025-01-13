
module.exports = ({_name,_price,_description,_imageFile,Category})=>{
    if(!_name || _name.trim().length=== 0){
        throw new Error("name is required")
    }

    if(!_description || _description.trim().length == 0 ){
        throw new Error("description is required")
    }

    if( !_price ||_price < 0 ){
        throw new Error("price is required")
    }

    if(!_imageFile ||_imageFile.trim().length == 0 ){
        throw new Error("Image path is required")
    }

    if(!Category || Category.trim().length == 0 ){
        console.log(Category);
        throw new Error("Category is required")
    }
  

}