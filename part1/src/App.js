import ReactDOM from 'react-dom';
import React from 'react';
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;