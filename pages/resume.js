import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume - Carlos Gatti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <img src="/gatti-foto.png" alt="gatti-foto" className={styles.gattismall} />

        <h1 className={styles.title}>
          Carlos Gatti
        </h1>

        <p className={styles.description}>
          Full-Stack Developer.
        </p>



      </main>
    </div>
  )
}
