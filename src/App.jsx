import './App.css'
import Header from './components/Header/Header'
import LeftMenu from './components/Left-Menu/LeftMenu'

function App() {
  
  return (
    <div className="root-container">
      <Header />
      <div className="row-container">
        <LeftMenu />
      </div>
    </div>
  )
}

export default App
