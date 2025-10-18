import Link from "next/link";
import ContadorCarrinho from "./ContadorCarrinho"; // <--- IMPORTAÇÃO NOVA!

const Header: React.FC = () => {
  // Continua sendo um Server Component!
  // Ele apenas "renderiza" o Client Component (ContadorCarrinho) dentro dele.
  return (
    <header className="bg-blue-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300"
        >
          📖 Educa Vitrine +
        </Link>

        <nav>
          {/* Usando o Componente Client aqui! */}
          <ContadorCarrinho />
        </nav>
      </div>
    </header>
  );
};

export default Header;
