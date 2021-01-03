import React from "react";
// Components
import Nav from "./components/Nav";
// Style
import GlobalStyle from "./components/GlobalStyle";
// Pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
