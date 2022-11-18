import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ListBeer from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import CreateBeer from './pages/CreateBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/beers" element={<ListBeer/>}/>
            <Route path="/random" element={<RandomBeer/>}/>
            <Route path="/create" element={<CreateBeer/>}/>
            <Route path="/beers/:beerId" element={<SingleBeer/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
