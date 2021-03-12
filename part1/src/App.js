import ReactDOM from 'react-dom';
import React from 'react';
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George"/>
      <Hello name="Daisy"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;