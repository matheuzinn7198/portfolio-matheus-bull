import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Portfólio de Matheus Bull - Desenvolvedor de Sistemas em formação. Especializado em React, Next.js, Node.js e desenvolvimento web moderno." />
        <meta name="keywords" content="Matheus Bull, desenvolvedor, portfolio, React, Next.js, JavaScript, programação" />
        <meta name="author" content="Matheus Bull" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}