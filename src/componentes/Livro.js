import React, { Component } from 'react';
import { getLivro } from '../service/API';

class Livro extends Component {
  state = {
    livro: null,
  };

  componentDidMount() {
    const livroId = 1; // Substitua pelo ID do livro desejado
    getLivro(livroId)
      .then((data) => {
        this.setState({ livro: data });
      })
      .catch((error) => {
        console.error('Erro ao obter livro:', error);
      });
  }

  render() {
    const { livro } = this.state;

    if (!livro) {
      return <div>Carregando...</div>;
    }

    return (
      <div>
        <h1>{livro.nome}</h1>
        {/* Exiba as informações adicionais do livro */}
      </div>
    );
  }
}

export default Livro;
