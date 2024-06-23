
import './App.css';
import'./Components/Navbar'
import Navbar from './Components/Navbar';
import RegistrationForm from './Components/RegistrationForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}/>
    <Route path='/register' element={<RegistrationForm/>}/>
      <Route path="/login" element={<LoginForm/>}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
