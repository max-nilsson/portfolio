import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Portfolio from './pages/Portfolio';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
