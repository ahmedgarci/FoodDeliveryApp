import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { Authenticate } from './Pages/Auth';
import {NavigationBar} from "./Components/Common/Header + Footer/NavigationBar"
import { SingleFoodPage } from './Pages/SingleFoodPage';
import { Admin } from './Pages/Admin';
import { Statistique } from './Components/Admin/Statistiques';
import { Categories } from './Components/Admin/Category/Categories';
import { Users } from './Components/Admin/Users';
import { Foods } from './Components/Admin/Foods';
import NotFound from './Components/Common/PageNotFound';
import { OrderPage } from './Pages/OderPage';
import { CartContextProvider } from './Functions/Hooks/useContext/CartContext';
import Footer from './Components/Common/Header + Footer/footer';
import { UserContextProvider } from './Functions/Hooks/useContext/UserContext';

function App() {
  return (
      <Router>
                  <CartContextProvider>
                    <UserContextProvider>
                      <NavigationBar />
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/auth' Component={Authenticate}/>
          <Route path='/food/:id' Component={SingleFoodPage}/>
          <Route path='/admin' Component={Admin}>
            <Route path='stat' element={<Statistique/>}  />
            <Route path='categories'element={<Categories/>} />
            <Route path='users' element={<Users/>}/>
            <Route path='food' element={<Foods />}/>
          </Route>
          <Route path='/order' element={<OrderPage/>}/>          
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
        </UserContextProvider>
        </CartContextProvider>

      </Router>
  );
}

export default App;
