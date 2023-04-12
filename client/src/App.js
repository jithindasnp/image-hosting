import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import View from './pages/View';
import Navbar from './components/navbar/Navbar';

function App() {
  return (

    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Register />}></Route>
          <Route path='/upload' element={<Upload />}></Route>
          <Route path='/view' element={<View />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
