const express = require("express")
const app = express()

const databaseConnection = require("./Infrastructure/DB/databaseConnection")
databaseConnection()
const multer = require("multer")
const upload = multer({dest:"/upload"})

app.use(express.json())

// AUTHENTICATION ROUTES
const UserController = require("./Controller/UserController")
app.post("/register", (req,res)=>UserController.Register(req,res))
app.post("/login", (req,res)=>UserController.Login(req,res))
app.post("/verify", (req,res)=>UserController.activateAccount(req,res))

// FOOD ROUTES 
const FoodController = require("./Controller/FoodController")
app.post("/food",(req,res)=>FoodController.RegisterFood(req,res));
app.delete("/food",(req,res)=>FoodController.deleteSpecificFood(req,res))
app.get("/food/all",(req,res)=>FoodController.getAllFoods(req,res))
app.get("/food/category",(req,res)=>FoodController.getFoodByCategory(req,res))
app.post("/food/image/upload",upload.single("image"),(req,res)=>FoodController.uploadImage(req,res))



app.listen(3500 , () => console.log(`Working on port 3500`))