// src/components/livros/CardLivro.tsx

"use client"; // ESSENCIAL para usar o hook e o onClick!

import React from "react";
import Link from "next/link";
import { Livro } from "../../lib/types"; // Caminho relativo
import { useCarrinho } from "../../context/CarrinhoContext"; // Caminho relativo

// 💡 Por que a interface está aqui? Para tipar o objeto que o componente recebe.
interface CardLivroProps {
  livro: Livro;
}

const CardLivro: React.FC<CardLivroProps> = ({ livro }) => {
  // 1. CHAMA O HOOK PARA ACESSAR A FUNÇÃO DO CONTEXTO
  const { adicionarAoCarrinho } = useCarrinho();

  // 2. CRIAÇÃO DA FUNÇÃO handleAdicionar (Onde estava faltando!)
  const handleAdicionar = (e: React.MouseEvent) => {
    e.stopPropagation(); //é VITAL: impede que o clique no botão ative o <Link> que envolve tudo!
    e.preventDefault(); // Adicione isto para garantir

    adicionarAoCarrinho(livro);
    alert(`${livro.titulo} adicionado ao Carrinho!`); // Feedback visual imediato
  };

  return (
    <Link
      href={`/livros/${livro.id}`}
      className="block bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
    >
      {/* Bloco da Imagem (que está com <img> nativo para contornar o DNS) */}
      <div className="relative h-64 w-full">
        <img
          src={livro.capaUrl}
          alt={`Capa do livro ${livro.titulo}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        {/* Título e Autor, Preço e Estoque */}
        {/* ... (código existente) ... */}

        {/* 3. Botão com o texto e o onClick já existente */}
        <div className="flex justify-between items-center mt-2">
          {/* Bloco do Preço e Estoque... */}
          <span className="text-2xl font-extrabold text-red-600">
            R$ {livro.preco.toFixed(2)}
          </span>
          {/* Bloco do Estoque... */}
          <span
            className={`text-sm font-semibold p-1 rounded-full ${
              livro.estoque > 0
                ? "text-green-700 bg-green-100"
                : "text-red-700 bg-red-100"
            }`}
          >
            {livro.estoque > 0 ? "Em Estoque" : "Esgotado"}
          </span>
        </div>

        {/* Botão de Adicionar (fora da div flex) */}
        <button
          className="w-full mt-4 bg-red-600 text-white font-bold py-2
          rounded-lg hover:bg-red-700 transition duration-300
          disabled:opacity-50"
          type="button"
          onClick={handleAdicionar}
          disabled={livro.estoque === 0}
        >
          ➕ Adicionar ao Carrinho
        </button>
      </div>
    </Link>
  );
};

export default CardLivro;
