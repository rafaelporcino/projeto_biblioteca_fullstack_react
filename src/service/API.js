const API_BASE_URL = 'http://localhost:3000/api'; // Substitua pelo URL da sua API

export const getAutor = async (id) => {
  const response = await fetch(`${API_BASE_URL}/autor/${id}`);
  const data = await response.json();
  return data;
};

export const getLivro = async (id) => {
  const response = await fetch(`${API_BASE_URL}/livro/${id}`);
  const data = await response.json();
  return data;
};

export const getEmprestimo = async (id) => {
  const response = await fetch(`${API_BASE_URL}/emprestimo/${id}`);
  const data = await response.json();
  return data;
};
