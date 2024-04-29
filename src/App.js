// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
     <div><Header /></div>
     <div><Form /></div>
     <div><Table /></div>
    </div>
  );
}

export default App
ReactDOM.render(<App />, document.getElementById('root'));
