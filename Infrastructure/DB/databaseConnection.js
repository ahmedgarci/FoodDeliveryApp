const mongoose = require('mongoose')

// mongodb+srv://FoodDeliveryDB:0000@cluster.yyayk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster

module.exports = ()=>{
    try{
    mongoose.connect("mongodb://localhost:27017/Food-delivery")
        .then(()=>console.log('connexion established !'))
        .catch((e)=>{
            throw new Error(e.message)}
    )
    }catch(e){
        console.log(e);
    }
    
}