import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("App is running");

  const toggleParagraphHandler = () => {
    setShowParagraph(prevshowParagraph => !prevshowParagraph);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      { showParagraph && <p>This is new!</p> }
      <Button onClick={ toggleParagraphHandler }>ToogleParagraph!</Button>
    </div>
  );
}

export default App;
