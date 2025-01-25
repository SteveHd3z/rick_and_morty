import './App.css';
import { Routes,Route } from 'react-router-dom';
import Character from './components/character';
import Episode  from './components/episode';
import Layout from './components/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Character/>}/>
        <Route path='/episode' element={<Episode/>}/>
      </Routes>
    </Layout>
  );  
  
}

export default App;
