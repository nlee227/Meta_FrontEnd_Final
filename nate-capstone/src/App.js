import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Header />
        <Main className="flex-grow-1"/>
        <Footer />
    </div>
  );
}

export default App;