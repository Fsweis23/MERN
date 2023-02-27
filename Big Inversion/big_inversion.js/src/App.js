import React from 'react';
import './App.css';

import BigInversion from './Components/BigInversion';

function App() {
  return (
    <div className="App">
      <BigInversion firstName="Jane" lastName="Doe" age={45} color="Black"/>
      <BigInversion firstName="John" lastName="Smith" age={88} color="Brown"/>
      <BigInversion firstName="Millard" lastName="Fillmore" age={50} color="Brown"/>
      <BigInversion firstName="Maria" lastName="Smith" age={62} color="Brown"/>
    </div>
  );
}

export default App;