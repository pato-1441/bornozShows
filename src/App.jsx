import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <div className="container-fluid">
      <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white">
        <Navbar />
        <ItemListContainer greeting={'Bienvenido a mi web'} />
        <ItemDetailContainer />        
      </div>
    </div>
  );
}

export default App;
