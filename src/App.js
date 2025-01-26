import './App.css';
import { Routes, Route } from 'react-router-dom';
import Character from './components/character';
import Episode from './components/episode';
import Layout from './components/layout';
import { DataProvider } from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Character />} />
          <Route path='/episode' element={<Episode />} />
        </Routes>
      </Layout>
    </DataProvider>
  );
}

export default App;
