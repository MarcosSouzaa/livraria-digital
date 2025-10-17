// src/components/layout/Header.tsx

import Link from "next/link";

// O componente Header não precisa de "use client" agora,
// pois não tem interatividade (como useState ou onClick),
// ele é um Server Component (padrão).
const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center py-4">
        {/* Logo/Nome da Loja */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300"
        >
          📖 Educa Vitrine +
        </Link>

        {/* Ícone de Carrinho (será Client Component depois) */}
        <nav>
          <button className="relative text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300">
            <span className="text-xl">🛒</span>
            {/* Contador Fixo */}
            <span
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-
             text-white rounded-full h-5 w-5 flex items-center justify-center font-bold"
            >
              0
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
