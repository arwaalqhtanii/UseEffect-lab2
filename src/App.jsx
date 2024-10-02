
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './assets/components/Main';
import CharacterDetails from './assets/components/Details';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 
