import {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Message from './Components/Message/Message';
import SideMenu from './Components/Side-Menu/SideMenu';
import TopMenu from './Components/Top-Menu/TopMenu';
import './Global/global.scss'
function App() {


  //Generate message pop
  const [loop, setLoop] = useState([])

  return (
    <div className="main-container">
 
 
    <Header/>
    <Message loop={loop} />
    <div className="side-top-menu">
    <SideMenu loop={loop} setLoop={setLoop}/>
    <TopMenu/>
    </div>
    
    </div>
  );
}

export default App;
