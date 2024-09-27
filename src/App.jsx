// src/App.jsx

import { Footer, Header, Products } from './components';
import './index.css'; // Importa Tailwind aquí
export const App = () => {
  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Products />
        </main>
        <Footer />
    </div>
  );
}

