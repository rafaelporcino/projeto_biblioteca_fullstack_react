import './App.css';
import Carroussel from './componentes/Carroussel';
//import ListProdutos from './componentes/ListProdutos';
import ListAutor from './componentes/ListAutor';
import ListLivro from './componentes/ListLivro';
import ListEmprestimo from './componentes/ListEmprestimo';
import Menu from './componentes/Menu';
//import produtos from './data/produtos.json';

function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <div className="w3-container w3-padding-16 w3-margin-top">
         <h1>Projeto Biblioteca</h1>
        </div>        
        <ListAutor></ListAutor>                 
        <ListLivro></ListLivro>             
        <ListEmprestimo></ListEmprestimo>        
      </main>
    </>
);
}

export default App;
