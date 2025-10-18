"use client"; // 💡 POR QUE ISSO É ESSENCIAL?
// Porque usamos hooks (useState, createContext) que só rodam no navegador.
// O Next.js exige essa diretiva para saber que deve enviar este código ao cliente.

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Livro, CarrinhoItem, CarrinhoContextType } from "@/lib/types";

// 1. Criação do Contexto com valores padrão (iniciais)
const CarrinhoContext = createContext<CarrinhoContextType | undefined>(
  undefined
);

interface CarrinhoProviderProps {
  children: ReactNode;
}

// 2. Criação do Provider (Onde a lógica do carrinho vive)
export const CarrinhoProvider: React.FC<CarrinhoProviderProps> = ({
  children,
}) => {
  // 💡 POR QUE useState?
  // O carrinho é um estado que MUDA (com o clique do usuário), e o React precisa rastrear essas mudanças.
  const [itens, setItens] = useState<CarrinhoItem[]>([]);

  // --- LÓGICA DE ADICIONAR AO CARRINHO ---
  const adicionarAoCarrinho = (livro: Livro, quantidade: number = 1) => {
    setItens((prevItens) => {
      // Verifica se o livro já está no carrinho
      const itemExistente = prevItens.find(
        (item) => item.livro.id === livro.id
      );

      if (itemExistente) {
        // Se existir, atualiza a quantidade
        return prevItens.map((item) =>
          item.livro.id === livro.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      } else {
        // Se não existir, adiciona como um novo item
        return [...prevItens, { livro, quantidade }];
      }
    });
  };

  // --- LÓGICA DE REMOVER DO CARRINHO ---
  const removerDoCarrinho = (livroId: number) => {
    setItens((prevItens) =>
      prevItens.filter((item) => item.livro.id !== livroId)
    );
  };

  // 3. O valor que o contexto fornece a todos os seus filhos
  const contextValue: CarrinhoContextType = {
    itens,
    adicionarAoCarrinho,
    removerDoCarrinho,
    // Futuramente: limparCarrinho, atualizarQuantidade, etc.
  };

  return (
    <CarrinhoContext.Provider value={contextValue}>
      {children}
    </CarrinhoContext.Provider>
  );
};

// 4. Criação de um Hook Personalizado (Melhor Prática)
export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);

  // 💡 POR QUE o if?
  // Garante que o hook só será usado DENTRO do CarrinhoProvider.
  if (context === undefined) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }

  return context;
};
