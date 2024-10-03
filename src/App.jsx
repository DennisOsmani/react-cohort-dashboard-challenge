import './App.css'
import Header from './components/Header/Header'
import LeftMenu from './components/Left-Menu/LeftMenu'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Feed/Home'
import Profile from './components/Profile/Profile'

function App() {
  
  return (
    <div className="root-container">
      <Header />
      <div className="row-container">
        <LeftMenu />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
       
      </div>
    </div>
  );
}

export default App
