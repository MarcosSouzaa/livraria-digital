// src/app/carrinho/page.tsx

"use client"; // ESSENCIAL: Precisa usar o hook useCarrinho()

import React from "react";
// Caminho relativo: estamos em src/app/carrinho/, o Contexto está em src/context/
import { useCarrinho } from "../../context/CarrinhoContext";
// Caminho relativo para a tipagem (necessário para a função de cálculo)
import { Livro } from "../../lib/types";
import Link from "next/link";

// Função auxiliar para calcular o valor total de todos os itens
const calcularTotal = (
  itens: { livro: Livro; quantidade: number }[]
): number => {
  return itens.reduce(
    (total, item) => total + item.livro.preco * item.quantidade,
    0
  );
};

const CarrinhoPage: React.FC = () => {
  // 1. Acessa os dados e funções do carrinho
  const { itens, removerDoCarrinho } = useCarrinho();

  // Calcula o valor final
  const totalGeral = calcularTotal(itens);

  // Renderiza a mensagem se o carrinho estiver vazio
  if (itens.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">🛒 Seu Carrinho Está Vazio</h1>
        <p className="text-gray-600 mb-6">
          Parece que você ainda não adicionou nenhum livro.
        </p>
        <Link href="/" className="text-lg text-blue-600 hover:underline">
          &larr; Voltar para a Vitrine
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-8 min-h-[60vh]">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Seu Carrinho
      </h1>

      <div className="bg-white shadow-xl rounded-lg p-6">
        {/* Tabela dos Itens */}
        <div className="space-y-4">
          {itens.map((item) => (
            <div
              key={item.livro.id}
              className="flex items-center justify-between border-b pb-4 last:border-b-0"
            >
              {/* Informações do Livro */}
              <div className="flex items-center space-x-4">
                {/* Aqui iriam as imagens. Mantemos o placeholder simples por enquanto. */}
                <div className="w-16 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-600 overflow-hidden">
                  Capa
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.livro.titulo}
                  </h2>
                  <p className="text-sm text-gray-600">{item.livro.autor}</p>
                </div>
              </div>

              {/* Preço e Ações */}
              <div className="flex items-center space-x-6 text-right">
                {/* Quantidade (Ainda não interativa, mas mostra o valor) */}
                <div className="text-sm font-medium">
                  Qtde: {item.quantidade}
                </div>

                {/* Subtotal */}
                <div className="text-lg font-extrabold text-red-600 w-24">
                  R$ {(item.livro.preco * item.quantidade).toFixed(2)}
                </div>

                {/* Botão de Remoção */}
                <button
                  onClick={() => removerDoCarrinho(item.livro.id)}
                  className="text-red-500 hover:text-red-700 transition duration-150"
                  aria-label={`Remover ${item.livro.titulo}`}
                >
                  &#10005; {/* Símbolo de "X" */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo e Total */}
        <div className="mt-8 pt-4 border-t-2 border-gray-200">
          <div className="flex justify-between items-center text-2xl font-bold">
            <span>Total Geral:</span>
            <span className="text-red-600">R$ {totalGeral.toFixed(2)}</span>
          </div>
        </div>

        {/* Botão de Finalizar Compra (Desativado por enquanto) */}
        <div className="mt-6 text-right">
          <button
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 disabled:opacity-50"
            disabled
          >
            Finalizar Compra (Em Breve)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarrinhoPage;
