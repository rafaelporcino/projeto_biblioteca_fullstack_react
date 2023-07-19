import React, { Component } from 'react';
import { getEmprestimo } from '../service/api';

class Emprestimo extends Component {
  state = {
    emprestimo: null,
  };

  componentDidMount() {
    const emprestimoId = 1; // Substitua pelo ID do emprestimo desejado
    getEmprestimo(emprestimoId)
      .then((data) => {
        this.setState({ emprestimo: data });
      })
      .catch((error) => {
        console.error('Erro ao obter emprestimo:', error);
      });
  }

  render() {
    const { emprestimo } = this.state;

    if (!emprestimo) {
      return <div>Carregando...</div>;
    }

    return (
      <div>
        <h1>{emprestimo.nome}</h1>
        {/* Exiba as informações adicionais do emprestimo */}
      </div>
    );
  }
}

export default Emprestimo;
