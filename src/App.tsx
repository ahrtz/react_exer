import React from 'react';
import ScrollCard from './components/ScrollCard';

import './App.scss'
import Page from './components/Page';
import  useVerticalScroll  from './components/ScrollV';







function App() {
  const verticalScroll = useVerticalScroll();
  return (
    <div className="App"  ref={verticalScroll}>
      
          <div className="App-header" >
            <ScrollCard/>

            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <h1>For Exer</h1>
          </div>
        
          <Page text="1번내용"/>
          <Page text="2번내용"/>
          <Page text="3번내용"/>
          
        
      
    </div>
  );
}

export default App;
