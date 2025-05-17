
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Component/Home';
import ForgotPassword from './Component/ForgotPassword';
import Register from './Component/Register';
import WelcomePage from './Component/WelcomePage';


function App() {
  return (

    <>
 
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path="/forget-password" element={<ForgotPassword/>}></Route>
    <Route path='/signup' element={<Register/>}></Route>
    <Route path='/welcomepage' element={<WelcomePage/>}></Route>
  </Routes>
    </>
    
  );
}

export default App;
