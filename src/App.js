import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Breakfast from './Pages/HomePage/MealType/Breakfast/Breakfast';
import Lunch from './Pages/HomePage/MealType/Lunch/Lunch';
import Dinner from './Pages/HomePage/MealType/Dinner/Dinner';
import Checkout from './Pages/Checkout/Checkout';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/AuthProcess/Register/Register';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}>
              <Route path="breakfast" element={<Breakfast></Breakfast>}></Route>
              <Route path="lunch" element={<Lunch></Lunch>}></Route>
              <Route path="dinner" element={<Dinner></Dinner>}></Route>
            </Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Routes>

        </div>

      </div>
      <Footer></Footer>
    </div>


  );
}

export default App;
