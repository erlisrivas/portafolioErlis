import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./componentes/NavBar"
import BannerSeccion from './componentes/BannerSeccion';
import AboutSection from './componentes/AboutSection';
import Portafolio from './componentes/Portafolio';
import Contacto from './componentes/Contacto';
import Skills from './componentes/Skills';


function App() {
  return (
    <div id="page-wrapper" className="page-wrapper">
      <NavBar/>
    <main id="main" class="main-wrapper">
      <BannerSeccion/>
      <AboutSection/>
      <Skills/>
      <Portafolio/>
      <Contacto/>
    </main>
    </div>
 
  );
}

export default App;
