// components/Header.js
import Head from 'next/head'

const headerStyle = {
  backgroundColor: "blue",
  color: "white",
  width: "100%",
  height: "50px"
};

const Header = () => (
  <Head>
    <title class="next-head"></title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Header;