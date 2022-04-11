import React, { useState, useCallback} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToogle, setAllowToogle] = useState(false);
  console.log("App is running");

  const toggleParagraphHandler = useCallback(() => {
    if(allowToogle){
      setShowParagraph(prevshowParagraph => !prevshowParagraph);
    }
  }, [allowToogle]);

  const allowToogleHandler = () => {
    setAllowToogle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={ allowToogleHandler }>Allow Toogling!</Button>
      <Button onClick={ toggleParagraphHandler }>ToogleParagraph!</Button>
    </div>
  );
}

export default App;
