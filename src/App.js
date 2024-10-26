import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { Authenticate } from './Pages/Auth';
import {NavigationBar} from "./Components/Common/NavigationBar"
import {Footer} from "./Components/Common/Footer"

function App() {
  return (
      <Router>
           <NavigationBar/>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/auth' Component={Authenticate}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
