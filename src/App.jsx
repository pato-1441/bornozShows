import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CarritoPage from "./components/Pages/CarritoPage/CarritoPage";

function App() {

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white">
          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenido a mi web'} />} />
            <Route path='/detail' element={<ItemDetailContainer /> } />
            <Route path='/cart' element={<CarritoPage />} />           
                   
          </Routes>
          
        </div>
      </div>    
    </BrowserRouter>
  );
}

export default App;
