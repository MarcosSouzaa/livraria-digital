// src/lib/livroMock.ts

import { Livro } from "./types";

export const LIVROS_MOCK: Livro[] = [
  {
    id: 1,
    titulo: "O Príncipe",
    autor: "Nicolau Maquiavel",
    preco: 29.9,
    estoque: 15,
    capaUrl: "https://via.placeholder.com/300x450?text=O+Principe", // 300x450 é um bom ratio de capa
    descricao: "Um tratado político essencial para entender o poder.",
  },
  {
    id: 2,
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu",
    preco: 39.99,
    estoque: 8,
    capaUrl: "https://via.placeholder.com/300x450?text=Arte+da+Guerra",
    descricao: "Estratégias milenares aplicáveis a negócios e vida.",
  },
  {
    id: 3,
    titulo: "Sapiens: Uma Breve História da Humanidade",
    autor: "Yuval Noah Harari",
    preco: 65.5,
    estoque: 20,
    capaUrl: "https://via.placeholder.com/300x450?text=Sapiens",
    descricao: "Uma análise profunda sobre a evolução humana.",
  },
  {
    id: 4,
    titulo: "O Poder do Hábito",
    autor: "Charles Duhigg",
    preco: 45.0,
    estoque: 12,
    capaUrl: "https://via.placeholder.com/300x450?text=Poder+do+Habito",
    descricao: "Por que fazemos o que fazemos na vida e nos negócios.",
  },
];

// Função para simular a busca de todos os livros (Server-Side)
export const buscarTodosLivros = (): Livro[] => {
  return LIVROS_MOCK;
};

// Função para buscar um livro pelo ID (usaremos nas rotas dinâmicas)
export const buscarLivroPorId = (id: number): Livro | undefined => {
  return LIVROS_MOCK.find((l) => l.id === id);
};
