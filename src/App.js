
import Login from './component/Login';
import Signup from './component/Signup';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import List from './component/List';
 
function App() {
  return (
    <div>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/List' element={<List/>}/>
      
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
