import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { Authenticate } from './Pages/Auth';
import {NavigationBar} from "./Components/Common/NavigationBar"
import {Footer} from "./Components/Common/Footer"
import { SingleFoodPage } from './Components/Home/Food/SingleFoodPage';
import { Admin } from './Pages/Admin';
import { Statistique } from './Components/Admin/Statistiques';
import { Categories } from './Components/Admin/Categories';
import { Users } from './Components/Admin/Users';
import { Foods } from './Components/Admin/Foods';
import NotFound from './Components/Common/PageNotFound';

function App() {
  return (
      <Router>
           <NavigationBar/>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/auth' Component={Authenticate}/>
          <Route path='/food' Component={SingleFoodPage}/>
          <Route path='/admin' Component={Admin}>
            <Route path='stat' element={<Statistique/>}  />
            <Route path='categories'element={<Categories/>} />
            <Route path='users' element={<Users/>}/>
            <Route path='food' element={<Foods />}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
