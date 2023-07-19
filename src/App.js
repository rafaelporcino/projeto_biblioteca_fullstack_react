
import './App.css';
import Carroussel from './componentes/Carroussel';
import ListUsuarios from './componentes/ListUsuarios';
import ListAutor from './componentes/ListAutor';
import ListLivro from './componentes/ListLivro';
import ListEmprestimo from './componentes/ListEmprestimo';
import Menu from './componentes/Menu';


function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <div className="w3-container w3-padding-16 w3-margin-top">
         <h1>Projeto Biblioteca</h1>
        </div>    
        <h1>Usuários</h1>    
        <ListUsuarios></ListUsuarios>    
        <h1>Autores</h1>
        <ListAutor></ListAutor>                 
        <h1>Livros</h1>
        <ListLivro></ListLivro>             
        <h1>Emprestimos</h1>
        <ListEmprestimo></ListEmprestimo>        
      </main>
    </>
);
}

export default App;
