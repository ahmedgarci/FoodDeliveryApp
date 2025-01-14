const mongoose = require('mongoose')

module.exports = ()=>{
    try{
    mongoose.connect("mongodb+srv://FoodDeliveryDB:0000@cluster.yyayk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
        .then(()=>console.log('connexion established !'))
        .catch((e)=>{
            throw new Error(e.message)}
    )
    }catch(e){
        console.log(e);
    }
    
}