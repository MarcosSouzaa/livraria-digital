import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Livro } from "@/lib/types"; // Importando a tipagem

// 💡 Por que a interface está aqui? Para tipar o objeto que o componente recebe.
interface CardLivroProps {
  livro: Livro;
}

const CardLivro: React.FC<CardLivroProps> = ({ livro }) => {
  // 💡 Por que não há 'use client'?
  // Este componente é puramente visual (renderiza dados estáticos)
  // e usa apenas o Link e Image do Next.js (que são compatíveis com Server Components).
  // A interatividade (o botão "Adicionar") virá depois, em um componente Client.

  return (
    // 💡 Por que o Link envolve o Card?
    // Permite que o clique em qualquer parte do card leve à página de detalhes.
    <Link
      href={`/livros/${livro.id}`} // Rota dinâmica para o detalhe (que criaremos depois)
      className="block bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
    >
      <div className="relative h-64 w-full">
        {/* 💡 Por que o next/image? 
          Para otimizar e carregar as capas de forma eficiente e responsiva.
          Atenção: Se as imagens não aparecerem, precisaremos editar o 'next.config.js' (como fizemos no projeto anterior!)
        */}
        <Image
          src={livro.capaUrl}
          alt={`Capa do livro ${livro.titulo}`}
          fill
          sizes="(max-width: 600px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="p-4">
        {/* Título e Autor */}
        <h3 className="text-xl font-bold text-gray-900 h-14 overflow-hidden mb-1">
          {livro.titulo}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{livro.autor}</p>

        {/* Preço e Estoque */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-2xl font-extrabold text-red-600">
            R$ {livro.preco.toFixed(2)}
          </span>
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

        {/* O botão de "Adicionar" será adicionado depois.
          Por enquanto, vamos focar apenas na exibição. 
        */}
      </div>
    </Link>
  );
};

export default CardLivro;
