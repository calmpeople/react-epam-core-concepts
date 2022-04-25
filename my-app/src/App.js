import './App.css';
import React, {Component, PureComponent, useState} from 'react';

const title1 = React.createElement("h1", {className: "title1"}, "Hello World H1");

class Component1 extends Component {
  state = {
      number: 0
  }

  changeNumber = (i) => {
      this.setState(({number}) => ({
          number: number + i
      }))
  }

  render () {
    return (
        <div>
            <h2 className='component-1'>Component 1</h2>
            <p>{`number:${this.state.number}`}</p>
            <p><button onClick={() => this.changeNumber(-1)}>Decrease -</button> <button onClick={() => this.changeNumber(1)}>Increase +</button></p>
            <hr/>
        </div>
    )
  }
}

class Component2 extends PureComponent {
  render () {
    return (
        <div>
            <h2 className='component-2'>Component 2</h2>
            <hr/>
        </div>
    )
  }
}

function TextFunction1() {
  return (
      <h2 className="text-function-2">
        Text Function 1
          <hr/>
      </h2>
  );
}

function Search() {
  return (
      <form action="">
          <input type="search"/>
          <button>Search</button>
          <hr/>
      </form>
  );
}

function Toggle() {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <h3>{`Toggle is: ${toggle ? 'OFF': 'ON'}`}</h3>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    );
}

function App() {
  return (
      <div className="App">
        {title1}
        <Search />
        <Component1 />
        <Component2 />
        <TextFunction1 />
        <Toggle />
      </div>
  );
}



export default App;
