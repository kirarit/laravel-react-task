import React from 'react';
import List from './List'

function App() {
  return (
  <div className ="container">
    <div className ="row">
      <div className ="col-md-6 mx-auto">
        <h1 className ="text-center">Tasks todo</h1>
        <List/>
      </div>
    </div>
  </div>
  );
}

export default App;
