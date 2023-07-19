import React, { useEffect } from "react";
import Cardlivro from "./CardLivro";
import { useState } from "react";
import API from '../service/API';

export default function Listlivros() {
    const [livros, setlivros ] = useState([]);

    useEffect(() => {
        API.get("/livro")
            .then((response) => setlivros(response.data))
            .catch((err) => alert(err));
    }, [])

    const handleCreate = (id) => {
      // Criar
        console.log('Cria registro!', id);
      };
    
    const handleEdit = (id) => {
        // editar
        console.log('Editar registro com ID:', id);
      };
    
      const handleDelete = (id) => {
        // apagar
        console.log('Apagar registro com ID:', id);
      };
    
    return (
        <div className="w3-row w3-container w3-margin-top">
        <h2>Dados da API:</h2>
        <table className="w3-table w3-bordered">
          <thead>
            <tr className="w3-light-grey">            
              <th>ID</th>
              <th>Autor</th>              
              <th>Titulo</th>                           
            </tr>
          </thead>
          <thead>          
        </thead>
          <tbody>
            {livros.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.id_autor}</td>                
                <td>{item.titulo}</td>
                <td>
                <button className="w3-btn w3-blue" onClick={() => handleCreate(item.id)}>Inserir</button>  
                <button className="w3-btn w3-khaki" onClick={() => handleEdit(item.id)}>Editar</button>
                <button className="w3-btn w3-red" onClick={() => handleDelete(item.id)}>Apagar</button>          
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    ) 
    /*   
        <section class="w3-row w3-container w3-margin-top">        
          {livros.map(item => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id}<br />
              <strong>Autor:</strong> {item.autor}<br />
              <strong>Titulo:</strong> {item.titulo}
            </li>
          ))}        
        </section>
    */

/*
    return (
        <section class="w3-row w3-container w3-margin-top">
        {  livros.map( prod => 
                <Cardlivro key={prod.id} livro={prod}></Cardlivro>
            )}
        </section>
    )
    */
}