import {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Mails from './Components/Mails/Mails';
import Message from './Components/Message/Message';
import SideMenu from './Components/Side-Menu/SideMenu';
import TopMenu from './Components/Top-Menu/TopMenu';
import './Global/global.scss'
function App() {


  //Generate message pop
  const [loop, setLoop] = useState([]);
  //Message state
  const [mail, setMail] = useState({ sender:'', receiver:'', subject:'', content:'', date:'', status:'', visited:'none'  });

  return (
    <div className="main-container">
 
 
    <Header/>
    <Message loop={loop} mail={mail} setMail={setMail} />
    <div className="side-top-menu">
    <SideMenu loop={loop} setLoop={setLoop}/>
    <div className="top-mails-container">
    <TopMenu/>
    <Mails mail={mail}/>
   
    </div>
    </div>
   
    </div>
  );
}

export default App;
