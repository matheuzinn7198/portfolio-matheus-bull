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
        <meta name="description" content="Portfólio de Matheus Bull - Desenvolvedor de Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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