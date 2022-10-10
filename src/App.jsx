import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CarritoPage from "./components/Pages/CarritoPage/CarritoPage";
import Eventos from "./components/Pages/Eventos/Eventos";
import NotFound from './components/404NotFound/404NotFound';

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
            <Route path='/eventos' element={<Eventos />} />
            <Route path='*' element={ <NotFound />} />           
                   
          </Routes>
          
        </div>
      </div>    
    </BrowserRouter>
  );
}

export default App;
