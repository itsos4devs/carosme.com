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
        <img src="/skull.png" width="80%"/>
        <Header title="You have been PAWNED" />
        <p className="description">
          You have clicked on a malicious link without reading the URL carefully. This would have caused your device to download malicious software or could have enabled an attacker to trick you into giving up your Carsome Credentials.</p> <br /><br />

          <p className="description">At Carsome, we prioritize your online safety and want to ensure that your digital experience remains secure and hassle-free. As part of our ongoing commitment to creating a spam-free environment, we want to equip you with the necessary knowledge and tools to identify and avoid spam effectively.</p><br /><br />
          
          <p className="description">This is a training excercise to educate all Carsome Staff about the importance of NOT clicking on random links without reading first. To learn more and protect yourself in the future Watch our educational video <a href="https://carsome.workplace.com/100055374376074/videos/205350779079650/">On Workplace</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
