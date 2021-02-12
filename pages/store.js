import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Store - Carlos Gatti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <img src="/gatti-foto.png" alt="gatti-foto" className={styles.gattismall} />

        <p className={styles.description}>
            Recommended products .
        </p>

        <div className={styles.grid}>
        
          <a href="https://amzn.to/3adeM1C" className={styles.card}>
            <h3>Kindle</h3>
            <p>For those who enjoy reading this is a great option.</p>
          </a>
          
          <a href="https://amzn.to/3qlfIXu" className={styles.card}>
            <h3>Logitech BRIO Ultra HD</h3>
            <p>Webcam with great image quality at a great price.</p>
          </a>

          <a href="https://amzn.to/3jIoKv2" className={styles.card}>
            <h3>Apple AirPods Pro</h3>
            <p>Great option to enjoy comfort and sound quality.</p>
          </a>
          
          <a href="https://amzn.to/3pewTsn" className={styles.card}>
            <h3>Xiaomi Redmi Note 9 Pro</h3>
            <p>Great cost benefit for those who need to purchase a cell phone.</p>
          </a>

          <a href="https://amzn.to/3qlnaBW" className={styles.card}>
            <h3>Razer Cynosa V2 Keyboard</h3>
            <p>Great keyboard for those who like to program and / or play.</p>
          </a>

          <a href="https://amzn.to/3jJBBNw" className={styles.card}>
            <h3>SAMSUNG 55-Inch UHD</h3>
            <p>Great television for those who like image quality.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
