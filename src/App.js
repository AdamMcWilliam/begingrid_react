import logo from './logo.svg';
import './App.css';

const { REACT_APP_SCRAPPER_KEY, REACT_APP_IMGUR_KEY } = process.env;
console.log(REACT_APP_SCRAPPER_KEY); // 8e8bd178bd91adb3.....
console.log(REACT_APP_IMGUR_KEY); // Some value

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
