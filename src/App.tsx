import React, { createElement } from 'react';
import Button from './stories/Button/Button';
import Sidebar from './Layout/Sidebar'
import Footer from './Layout/Footer'


function App() {

  //createElement
  return (
    <div className="App">
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
