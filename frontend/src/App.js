import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header';
import Mails from './Components/Mails/Mails';
import Message from './Components/Message/Message';
import SideMenu from './Components/Side-Menu/SideMenu';
import TopMenu from './Components/Top-Menu/TopMenu';
import './Global/global.scss'
function App() {
  const [showPost, setShowPost] = useState()
  const [mail, setMail] = useState({ sender:'', receiver:'', subject:'', content:'', date:'', status:'', visited:'none'  });
  const [loop, setLoop] = useState([]);

  useEffect(()=> {
   //Post mails and save to the database
   const postHandler = async () => {
    await axios.post('http://localhost:8080/mail', mail)
    .then(res => console.log(res))
    .catch((err)=>console.log(err))
   }
   
   postHandler()
  //  callMail()
    },[mail])


    //Call mails as soon as page is loaded! 
    useEffect(() => {

         axios.get('http://localhost:8080/mail')
        .then(res => {setShowPost(res.data)})
        .catch((err)=>console.log(err))

    }, [mail])
   
    

  //Generate message pop
  //Message state

  return (
    <div className="main-container">
 
 
    <Header/>
    
    <Message loop={loop} setLoop={setLoop} mail={mail} setMail={setMail} />
    <div className="side-top-menu">
    <SideMenu loop={loop} setLoop={setLoop}/>
    <div className="top-mails-container">
    <TopMenu/>
    {showPost ? showPost.map((post)=>(<Mails post={post} mail={mail}/>)):''}
    
   
    </div>
    </div>
   
    </div>
  );
}

export default App;
