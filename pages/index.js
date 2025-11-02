import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Goals from '../components/Goals'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus Bull - Desenvolvedor em Formação</title>
        <meta name="description" content="Portfólio de Matheus Bull - Desenvolvedor de Sistemas em formação. Especializado em React, Next.js e desenvolvimento web moderno." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Matheus Bull - Desenvolvedor em Formação" />
        <meta property="og:description" content="Portfólio de Matheus Bull - Desenvolvedor de Sistemas em formação. Transformando ideias em código." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matheusbull.vercel.app" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matheus Bull - Desenvolvedor em Formação" />
        <meta name="twitter:description" content="Portfólio de Matheus Bull - Desenvolvedor de Sistemas em formação." />
      </Head>
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
    </>
  )
}