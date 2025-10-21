/*Não é código de JavaScript/Node.js: Por estar entre /* e , ela é um comentário e não é executada pelo Node.js.
Finalidade (IntelliSense): O principal objetivo é fornecer IntelliSense (autocompletar e verificação de tipos) 
dentro do seu editor de código (VS Code, por exemplo). */
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração básica
  reactStrictMode: true,

  // 🚨 CONFIGURAÇÃO ESSENCIAL PARA CARREGAR IMAGENS EXTERNAS
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // DOMÍNIO DO FIREBASE STORAGE (Você precisa permitir o host que armazena suas capas)
        hostname: "firebasestorage.googleapis.com",
      },
      // OPCIONAL: Se você ainda estiver testando com o placeholder, adicione este:
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

module.exports = nextConfig;
