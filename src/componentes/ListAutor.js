import React, { useEffect } from "react";
import CardAutor from "./CardAutor";
import { useState } from "react";
import API from '../service/API';

export default function ListAutors() {
    const [autors, setAutors ] = useState([]);

    useEffect(() => {
        API.get("/autor")
            .then((response) => setAutors(response.data))
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
        <h2>Dados da API / autor:</h2>
        <table className="w3-table w3-bordered">
          <thead>
            <tr className="w3-light-grey">            
              <th>ID</th>
              <th>Nome</th>                            
            </tr>
          </thead>
          <thead>          
        </thead>
          <tbody>
            {autors.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>                                                           
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
        {  autors.map( aut => 
                <CardAutor key={aut.id} autor={aut} >  </CardAutor>             
            )}
        </section>
    */
    
    
}