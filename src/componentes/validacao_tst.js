import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedObras, setEditedObras] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
      });
  };

  const handleEdit = (id, nome, obras) => {
    setEditMode(id);
    setEditedName(nome);
    setEditedObras(obras);
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:3000/data/${id}`, { nome: editedName, obras: editedObras })
      .then(response => {
        console.log('Dados atualizados:', response.data);
        setEditMode(null);
        fetchData();
      })
      .catch(error => {
        console.error('Erro ao atualizar dados:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`)
      .then(response => {
        console.log('Registro apagado:', id);
        fetchData();
      })
      .catch(error => {
        console.error('Erro ao apagar registro:', error);
      });
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedName('');
    setEditedObras('');
  };

  return (
    <div className="w3-row w3-container w3-margin-top">
      <h2>Dados da API:</h2>
      <table className="w3-table w3-bordered">
        <thead>
          <tr className="w3-light-grey">
            <th>ID</th>
            <th>Nome</th>
            <th>Obras</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  item.nome
                )}
              </td>
              <td>
                {editMode === item.id ? (
                  <input
                    type="text"
                    value={editedObras}
                    onChange={(e) => setEditedObras(e.target.value)}
                  />
                ) : (
                  item.obras
                )}
