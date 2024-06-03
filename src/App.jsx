import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import './styles/App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
