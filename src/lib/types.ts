import { Decimal128, Int32 } from "mongodb";

//Define a estrutura que um Livro terá
export interface Livro {
  id: number;
  titulo: string;
  subtitulo: string;
  autor: string;
  editora: string;
  publicacao: string;
  estado: string;
  idioma: string;
  peso: string;
  dimensoes: string;
  qtdPaginas: string;
  preco: Decimal128; // Em reais (ex: 49.90)
  estoque: Int32; // Quantidade disponível
  capaUrl: string; // URL da capa
}

// Tipos de dados que usaremos no Context API (Carrinho)
export interface CarrinhoItem {
  livro: Livro;
  quantidade: number;
}

export interface CarrinhoContextType {
  itens: CarrinhoItem[];
  adicionarAoCarrinho: (livro: Livro, quantidade?: number) => void;
  removerDoCarrinho: (livroId: number) => void;
}
