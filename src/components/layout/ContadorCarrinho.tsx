// src/components/layout/ContadorCarrinho.tsx

"use client";

import React from "react";
import Link from "next/link"; // Importado para a navegação
// Caminho relativo, o Contexto está em src/context/
import { useCarrinho } from "../../context/CarrinhoContext";

const ContadorCarrinho: React.FC = () => {
  const { itens } = useCarrinho();
  const totalLivros = itens.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    // 💡 O <Link> precisa do 'relative' para que o <span> flutue corretamente
    <Link
      href="/carrinho"
      className="relative text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
    >
      <span className="text-xl">Total do Carrinho 🛒</span>

      {/* Apenas renderiza se houver itens */}
      {totalLivros > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {totalLivros}
        </span>
      )}
    </Link>
  );
};

export default ContadorCarrinho;
