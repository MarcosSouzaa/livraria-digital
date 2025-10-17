// src/components/layout/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-10 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Livraria Digital. Todos os direitos
          reservados.
        </p>
        <p className="text-sm mt-1">
          Desenvolvido com Next.js, React e amor. ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
