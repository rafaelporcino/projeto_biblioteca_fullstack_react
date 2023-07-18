import './App.css';
import Carroussel from './componentes/Carroussel';
import ListAutor from './componentes/ListAutor';
function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <div className="w3-container w3-padding-16 w3-margin-top">
         <h1>Autores</h1>
        </div>                
        <ListAutor></ListAutor>                              
      </main>
    </>
);
}

export default App;
