import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { Authenticate } from "./Pages/Auth";
import { NavigationBar } from "./Components/Common/NavigationBar";
import { SingleFoodPage } from "./Pages/SingleFoodPage";
import { Admin } from "./Pages/Admin";
import { Statistique } from "./Components/Admin/Statistiques";
import { Categories } from "./Components/Admin/Category/Categories";
import { Users } from "./Components/Admin/Users";
import { Foods } from "./Components/Admin/Foods";
import NotFound from "./Pages/PageNotFound";
import { OrderPage } from "./Pages/OderPage";
import { CartContextProvider } from "./Context/CartContext";
import Footer from "./Components/Common/footer";
import { UserContextProvider } from "./Context/UserContext";
import { ActivateAccount } from "./Pages/ActivationAccount";
import OrderSuccess from "./Pages/OrderSuccess";
import Cookies from "js-cookie";

const role = ()=>{
  const r = Cookies.get("role");

  if(!r){
    return false;
  }else if(r=== "USER"){
    return false;
  }else{
    return true;
  }
}


function App() {
  return (
    <Router>
      <CartContextProvider>
        <UserContextProvider>
          <NavigationBar />
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/auth" Component={Authenticate} />
            <Route path="/activate" Component={ActivateAccount} />
            <Route path="/food/:id" Component={SingleFoodPage} />
            <Route path="/admin" element={role()? <Admin /> : <HomePage />}>
              <Route path="stat" element={<Statistique />} />
              <Route path="categories" element={<Categories />} />
              <Route path="users" element={<Users />} />
              <Route path="food" element={<Foods />} />
            </Route>
            <Route path="/order" element={<OrderPage />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </CartContextProvider>
    </Router>
  );
}

export default App;
