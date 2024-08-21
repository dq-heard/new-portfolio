import {
  About,
  Contact,
  Header,
  Home,
  Projects,
  Resume,
  Skills,
} from "./container";
import BackToTop from "./components/BackToTop";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

export default App;
