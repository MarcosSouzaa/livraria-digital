// src/components/layout/Layout.tsx

import React, { ReactNode } from "react";
import Header from "./Header"; // Importação relativa (dentro da mesma pasta)
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode; // Tipo obrigatório do React para passar conteúdo
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main é onde o conteúdo da página será injetado. flex-grow empurra o Footer para baixo */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
