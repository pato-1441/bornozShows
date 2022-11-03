import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CartPageContainer from "./components/Pages/CartPageContainer/CartPageContainer";
import Events from "./components/Pages/Events/Events";
import NotFound from "./components/404NotFound/404NotFound";
import CartContextProvider from "./context/cartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="container-fluid min-h-screen bg-slate-800 pb-10">
          <div className="flex flex-col bg-slate-800 text-white">
            <NavBar />
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
              <Route path="/cart" element={<CartPageContainer />} />
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