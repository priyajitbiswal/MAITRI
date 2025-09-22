import Starfield from './components/Starfield'
import Header from './components/Header'
import Webcam from './components/Webcam'
import AIAssistant from './components/AIAssistant'
import './App.css'

function App() {
  return (
    <div className="app">
      <Starfield />
      <Header />
      <main className="main-content">
        <Webcam />
        <AIAssistant />
      </main>
    </div>
  )
}

export default App
