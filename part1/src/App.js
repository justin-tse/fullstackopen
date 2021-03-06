import ReactDOM from 'react-dom';
import React from 'react';
const Hello = (props) => {
  return (
    <>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </>
  )
}

const Footer = () => {
  return (
    <>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;