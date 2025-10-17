// src/app/layout.tsx

import "./globals.css"; // Mantenha a importação do CSS (onde o Tailwind está)
import Layout from "@/components/layout/Layout"; // <--- USANDO O ALIAS @/ (muito mais limpo!)

// Configurações de metadados da página (para SEO)
export const metadata = {
  title: "Educa Vitrine +",
  description:
    "Sua próxima leitura começa aqui. Desenvolvido com Next.js e React.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* O Layout engloba a aplicação, injetando o Header e Footer */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
