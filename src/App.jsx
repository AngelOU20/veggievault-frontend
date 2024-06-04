import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './styles/App.css';

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
