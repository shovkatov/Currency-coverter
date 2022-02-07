import { Route, Routes } from 'react-router-dom';
import CurrencyPage from './components/CurrencyPage';
import Header from './components/Header';
import HistoryPage from './components/HistoryPage';

function App() {
   return (
      <div >
         <Header />
         <Routes>
            <Route path="/" element={<CurrencyPage />} />
            <Route path="/history" element={<HistoryPage />} />
         </Routes>
      </div>
   );
}

export default App;
