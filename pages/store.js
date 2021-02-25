

// pages/index.js

import Layout from "../components/Layout";
import styles from '../styles/Home.module.css'

const Store = () => <Layout>

<div className={styles.container}>

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

          <a href="https://amzn.to/3pkmPOu" className={styles.card}>
            <h3>Philips Hue Go White and Color Portable Dimmable LED</h3>
            <p>(Bluetooth & Zigbee) Smart Light Table Lamp, White.</p>
          </a>

          <a href="https://amzn.to/2N1aZMe" className={styles.card}>
            <h3>WD 6TB My Cloud Home Personal Cloud</h3>
            <p>Network Attached Storage - NAS - WDBVXC0060HWT-NESN</p>
          </a>

          <a href="https://amzn.to/2NXHpY3" className={styles.card}>
            <h3>Razer Basilisk X HyperSpeed - Gaming Mouse</h3>
            <p>Bluetooth & Wireless Compatible, 16K DPI Optical Sensor.</p>
          </a>

          <a href="https://amzn.to/2NBUlTy" className={styles.card}>
            <h3>Nintendo Switch - Mario Red & Blue Edition</h3>
            <p>This Nintendo Switch system takes inspiration from Mario.</p>
          </a>


        </div>
      </main>
    </div>

</Layout>;

export default Store;