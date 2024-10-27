import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { Authenticate } from './Pages/Auth';
import {NavigationBar} from "./Components/Common/NavigationBar"
import {Footer} from "./Components/Common/Footer"
import { SingleFoodPage } from './Components/Home/Food/SingleFoodPage';

function App() {
  return (
      <Router>
           <NavigationBar/>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/auth' Component={Authenticate}/>
          <Route path='/food' Component={SingleFoodPage}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
