import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CartPage from "./components/Pages/CartPage/CartPage";
import Events from "./components/Pages/Events/Events";
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
              <Route path="/cart" element={<CartPage />} />
              <Route path="/events" element={<Events />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
