import React from 'react';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import GamePlay from './components/GamePlay/gameplay';
import './App.css'
import './styles/fonts.css';

function App() {

  return (
    <div className="App">
      <About />
      <GamePlay />
      <Footer />
    </div>

  )
}

export default App
