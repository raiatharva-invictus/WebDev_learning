import logo from './logo.svg';
import './App.css'; // this is basically the css being applied
import { use, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setvalue] = useState(0)
  return (
    <div className="App">
      <Navbar logoText="CWAR"/>
      <div className='value'>
      {value}
      </div>
        <button className="btn" onClick={()=>{setvalue(value+1)}}>change</button>
        <Footer/>
    </div>
  );
}

export default App;
