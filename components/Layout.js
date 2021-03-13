// components/Layout.js

import Header from "./Header";
import NavBar from "./Navbar";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <NavBar />
    <Header />

    <div className="Content" style={contentStyle}>
      {props.children}
    </div>

  </div>
);

export default Layout;