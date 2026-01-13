import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Squad from './pages/Squad';
import Matches from './pages/Matches';
import FanZone from './pages/FanZone';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="squad" element={<Squad />} />
          <Route path="matches" element={<Matches />} />
          <Route path="fanzone" element={<FanZone />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
