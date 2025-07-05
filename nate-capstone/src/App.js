import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import './index.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="d-flex flex-column min-vh-100">
        <Header setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} />
        <Main currentScreen={currentScreen} setCurrentScreen={setCurrentScreen}/>
        <Footer setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
    </div>
  );
}

export default App;