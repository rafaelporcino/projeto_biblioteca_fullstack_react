import React, { useEffect } from "react";
import CardEmprestimo from "./CardEmprestimo";
import { useState } from "react";
import API from '../service/API';

export default function ListEmprestimos() {
    const [emprestimo, setEmprestimos ] = useState([]);

    useEffect(() => {
        API.get("/emprestimo")
            .then((response) => setEmprestimos(response.data))
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
        <h2>Dados da API / emprestimo:</h2>
        <table className="w3-table w3-bordered">
          <thead>
            <tr className="w3-light-grey">            
              <th>ID</th>
              <th>Usuario</th>
              <th>Livro</th>
              <th>id_situacao</th>
              <th>Data Retirada</th>
              <th>Data Devolucao</th>
              <th>Data Entrega</th>              
            </tr>
          </thead>
          <thead>          
        </thead>
          <tbody>
            {emprestimo.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.titulo}</td>
                <td>{item.id_situacao}</td>
                <td>{item.dt_retirada}</td>
                <td>{item.dt_devolucao_prevista}</td>
                <td>{item.dt_entrega}</td>   
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
          {emprestimo.map(item => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id}<br />
              <strong>Usuario:</strong> {item.id_usuario}<br />
              <strong>Livro:</strong> {item.id_livro}<br />
              <strong>id_situacao:</strong> {item.id_situacao}<br />
              <strong>Data Retirada:</strong> {item.dt_retirada}<br />
              <strong>Data Devolucao:</strong> {item.dt_devolucao_prevista}<br />
              <strong>Data Entrega:</strong> {item.dt_entrega}
            </li>
          ))}        
        </section>
*/

    /*
    return (
        <section class="w3-row w3-container w3-margin-top">
        {  emprestimo.map( empr => 
                <CardEmprestimo key={empr.id} emprestimo={empr}></CardEmprestimo>
            )}
        </section>
    )
    */
}