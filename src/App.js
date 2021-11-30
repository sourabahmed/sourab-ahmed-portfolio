import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pages from './components/Pages/Pages';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/home" element={<Pages />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
