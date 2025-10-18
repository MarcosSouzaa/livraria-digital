import "./globals.css";
import Layout from "@/components/layout/Layout";
import { CarrinhoProvider } from "@/context/CarrinhoContext"; // <--- IMPORTAÇÃO NOVA!

// ... (Metadata)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* 💡 POR QUE O PROVIDER VAI AQUI? */}
        {/* Ele envolve TUDO, garantindo que qualquer componente no site (Header, Card) 
           possa acessar o carrinho. */}
        <CarrinhoProvider>
          <Layout>{children}</Layout>
        </CarrinhoProvider>
      </body>
    </html>
  );
}
