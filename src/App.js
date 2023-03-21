import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {

  
  return (
    <div className="App">
<AuthProvider>
      <BrowserRouter>
        
           <Header></Header>
      
       
        <Routes>
          <Route path='/' element={<Home/>}></Route>      
          <Route path='/home' element={<Home />}></Route>

          
          <Route path='/login' element={
           <AuthProvider>
               <Login />
           </AuthProvider>
           
          }></Route>
          <Route path='/booking/:serviceId' element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
            }></Route>          
          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </BrowserRouter>
        </AuthProvider>
      
    </div>
  );
}

export default App;
