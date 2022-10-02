import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>New platform for CARS!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="CAR OS ME .. New way to build CARS !" />
        <p className="description">
          COMMING SOON .. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
