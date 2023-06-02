import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CAROSME# ways to build modern cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="You have been PAWNED" />
        <h3 className="description">
          You have clicked on a malicious link without reading the URL carefully. This would have caused your device to download Malaicious software or could have enabled an attacker to trick you into giving up your Carsome Credentials.
          
          This is a training excercise to educate all Carsome Staff about the importance of NOT clicking on random links without reading first.
          To learn more and protect yourself in the future follow this link <a href="#">WorkPlace</a>
        </h3>
      </main>

      <Footer />
    </div>
  )
}
