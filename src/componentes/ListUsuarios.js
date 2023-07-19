import React, { useEffect } from "react";
import CardUsuario from "./CardUsuario";
import { useState } from "react";
import API from '../service/API';

export default function ListUsuarios() {
    const [usuarios, setUsuarios ] = useState([]);

    useEffect(() => {
        API.get("/usuarios")
            .then((response) => setUsuarios(response.data))
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
        <h2>Dados da API / usuarios:</h2>
        <table className="w3-table w3-bordered">
          <thead>
            <tr className="w3-light-grey">            
              <th>ID</th>
              <th>Nome</th>              
              <th>Username</th>                           
            </tr>
          </thead>
          <thead>          
        </thead>
          <tbody>
            {usuarios.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>                
                <td>{item.username}</td>
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
}