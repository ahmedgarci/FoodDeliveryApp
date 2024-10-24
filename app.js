const express = require("express")
const app = express()

const multer = require("multer")
const upload = multer({dest:"/upload"})
const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(cookieParser())


// AUTHENTICATION ROUTES
const AuthController = require("./Controller/Auth/AuthController")
app.post("/register", (req,res)=>AuthController.Register(req,res))
app.post("/login", (req,res)=>AuthController.Login(req,res))
app.post("/verify", (req,res)=>AuthController.activateAccount(req,res))

// FOOD ROUTES 
const FoodController = require("./Controller/Food/FoodController")
const foodController = new FoodController();
app.get("/food/all",(req,res)=>foodController.getAllFoods(req,res))
app.get("/food/category",(req,res)=>foodController.getFoodByCategory(req,res))

// COMMENTS ROUTES
    







// ORDER FEATURE
const OrdersController = require("./Controller/Order/OrdersController");
const checkTokenValidity = require("./Infrastructure/Middelwares/checkTokenValidity")
const ordersController = new OrdersController();
app.post("/Order/place",checkTokenValidity,(req,res)=>ordersController.MakeOrder(req,res))



// ADMIN ROUTES
const authorizeAdmin = require("./Infrastructure/Middelwares/authorizeAdmin")
const CategoryController = require("./Controller/Category/CategoryController")
const UserController = require("./Controller/User/UserController")
const ImageController = require("./Controller/Image/ImageController")
const imageController = new ImageController();
const userController = new UserController();
const categoryController = new CategoryController()

    app.post("/food",checkTokenValidity,authorizeAdmin,(req,res)=>foodController.RegisterFood(req,res));
    app.delete("/food",checkTokenValidity,authorizeAdmin,(req,res)=>foodController.deleteSpecificFood(req,res))
    app.post("/food/image/upload",checkTokenValidity,authorizeAdmin,upload.single("image"),(req,res)=>imageController.uploadImage(req,res))
    
    app.post("/category/create",checkTokenValidity,authorizeAdmin,(req,res)=>categoryController.CreateNewCategory(req,res))
    app.get("/category/getAll",checkTokenValidity,authorizeAdmin,(req,res)=>categoryController.getAllCategories(req,res))
    app.delete("/category/delete",checkTokenValidity,authorizeAdmin,(req,res)=>categoryController.deleteCategory(req,res))
    
    app.get("/users/all",checkTokenValidity,authorizeAdmin,(req,res)=>userController.getAllUsers(req,res))
    app.delete("/users/delete/",checkTokenValidity,authorizeAdmin,(req,res)=>userController.deleteUser(req,res))








const databaseConnection = require("./Infrastructure/DB/databaseConnection")
databaseConnection()


app.listen(3500 , () => console.log(`Working on port 3500`))