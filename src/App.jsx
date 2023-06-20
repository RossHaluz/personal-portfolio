import { AppContainer, Section } from "./App.styled";
import AppBar from "./components/AppBar";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";


function App() {
  return <AppContainer>
    <AppBar/>
    <Menu/>
    <Section>
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
    </Section>
  </AppContainer>
}

export default App;
