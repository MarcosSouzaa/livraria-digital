"use client"; // 💡 ESSENCIAL para usar o hook!

import React from "react";
import { useCarrinho } from "@/context/CarrinhoContext";
// Importe o Link aqui se quiser que o botão navegue. Por enquanto, não.

const ContadorCarrinho: React.FC = () => {
  const { itens } = useCarrinho(); // Pega apenas a lista de itens do contexto

  // 💡 CÁLCULO: Reduz a lista de itens para um único número (total de livros)
  const totalLivros = itens.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <button className="relative text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300">
      <span className="text-xl">🛒</span>
      {totalLivros > 0 && ( // 💡 Condicional: só mostra o número se for maior que zero
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {totalLivros}
        </span>
      )}
    </button>
  );
};

export default ContadorCarrinho;
