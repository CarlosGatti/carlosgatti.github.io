// pages/index.js

import Layout from "../components/Layout";
import styles from '../styles/Home.module.css'

const Index = () => <Layout>

    <div className={styles.container}>
        <main className={styles.main}>

            <img src="/gatti-foto.png" alt="gatti-foto" className={styles.gatti} />

            <h1 className={styles.title}>
                Carlos Gatti
            </h1>

            <p className={styles.description}>
                Here you can learn a little more about me.
            </p>

            <div className={styles.grid}>
                <a href="https://www.linkedin.com/in/carlos-gatti-693b909b/" className={styles.card}>
                    <h3>LinkedIn</h3>
                    <p>It is a good place to learn about my career.</p>
                </a>

                <a href="https://www.linkedin.com/resume-builder/urn:li:fs_memberResume:15992498/?edit=true" className={styles.card}>
                    <h3>Resume</h3>
                    <p>It is a good place to learn about my career.</p>
                </a>


                <a
                    href="https://github.com/carlosgatti/"
                    className={styles.card}
                >
                    <h3>GitHub</h3>
                    <p>Repositories of my personal projects.</p>
                </a>
                <a href="/store" className={styles.card}>
                    <h3>Store</h3>
                    <p>My personal references for books, courses and products.</p>
                </a>
                <a
                    href="https://www.instagram.com/carloseduardogatti/"
                    className={styles.card}
                >
                    <h3>Instagram</h3>
                    <p>
                        Great place to follow my daily publications.
                    </p>
                </a>
            </div>
        </main>
    </div>

</Layout>;

export default Index;