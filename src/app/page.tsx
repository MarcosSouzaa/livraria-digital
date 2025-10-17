// 💡 Por que essas importações funcionam?
// Usamos o alias '@/' que aponta para 'src/'.
import { buscarTodosLivros } from "@/lib/livroMock";
import CardLivro from "@/components/livros/CardLivro";

// 💡 Por que este é um Server Component?
// Ele não usa hooks, nem manipula o DOM. Ele é otimizado para buscar dados
// antes de enviar o HTML para o navegador, tornando-o extremamente rápido.
export default function Home() {
  // 1. Buscando os dados (simulado no servidor)
  const livros = buscarTodosLivros();

  return (
    <section className="py-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-3">
        📚 Livros em Destaque
      </h1>

      {/* 2. Grid de Livros responsivo (Tailwind) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* 3. Mapeando a lista para criar vários CardLivro */}
        {livros.map((livro) => (
          // 💡 Por que a key é essencial?
          // É uma regra do React. Ajuda o React a rastrear quais itens mudaram,
          // foram adicionados ou removidos, otimizando a performance da lista.
          <CardLivro key={livro.id} livro={livro} />
        ))}
      </div>

      {livros.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Nenhum livro encontrado.
        </p>
      )}
    </section>
  );
}
