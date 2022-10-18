import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CarritoPage from "./components/Pages/CarritoPage/CarritoPage";
import Eventos from "./components/Pages/Eventos/Eventos";
import NotFound from "./components/404NotFound/404NotFound";
import CartContextProvider from "./context/cartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="container-fluid h-fit bg-slate-800 pb-10">
          <div className="flex flex-col bg-slate-800 text-white">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={"Bornoz Events"} />}
              />
              <Route
                path="/category/:categoryID"
                element={<ItemListContainer greeting={"Bornoz Events"} />}
              />
              <Route
                path="/detail/:eventID"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<CarritoPage />} />
              <Route path="/events" element={<Eventos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
