
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from './components/Search'
import './App.css';
function App() {
  return (
    < div className="view">
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/search" element={<Search />} />
      </Routes>
      
    </div>
  );
}

export default App;
