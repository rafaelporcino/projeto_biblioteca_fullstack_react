import React, { Component } from 'react';
import { getAutor } from '../service/api';

class Autor extends Component {
  state = {
    autor: null,
  };

  componentDidMount() {
    const autorId = 1; // Substitua pelo ID do autor desejado
    getAutor(autorId)
      .then((data) => {
        this.setState({ autor: data });
      })
      .catch((error) => {
        console.error('Erro ao obter autor:', error);
      });
  }

  render() {
    const { autor } = this.state;

    if (!autor) {
      return <div>Carregando...</div>;
    }

    return (
      <div>
        <h1>{autor.nome}</h1>
        {/* Exiba as informações adicionais do autor */}
      </div>
    );
  }
}

export default Autor;
