import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CAROSME #7 ways to build modern cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="You have been PAWNED" />
        <p className="description">
          You have clicked on a malicious link which is part of the email campaign setup by the Cyber Defense Team in Carsome.
          To learn more and protect yourself in the future follow this link <a href="#">WorkPlace</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
