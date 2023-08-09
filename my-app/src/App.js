
import './App.css';
import Navbar from './Components/Navbar/navBar';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import Header from './Components/Header/header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <ItemListContainer greeting={"¡Bienvenidos a Sport!"}/>
      <ItemListContainer greeting={"Envios sin cargo a todo el pais en compras superiores a $10.000"}/>
    </div>
  );
}
export default App;