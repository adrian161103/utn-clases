import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App({children}) {
  return (
    <>
      <section className="Container" style={{ position: "relative", minHeight: "90vh" }}  >
        <Header />
        {children}
        <Footer />
      </section>
    </>
  );
}

export default App;
