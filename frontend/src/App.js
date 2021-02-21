import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Route, Switch, withRouter  } from 'react-router-dom';
import Header from './Components/Header/Header';
import MailLoop from './Components/Mails/MailLoop';
import Message from './Components/Message/Message';
import SideMenu from './Components/Side-Menu/SideMenu';
import TopMenu from './Components/Top-Menu/TopMenu';
import './Global/global.scss'
import SingleMail from './Components/Mails/SingleMail';
import Login from './Components/Login/Login';
import { auth } from './Components/Firebase/Firebase';
import BottomMenu from './Components/Bottom-menu/BottomMenu';


function App(props) {

  console.log(props.location.pathname);
  const [showPost, setShowPost] = useState()
  const [currentUser, setCurrentUser] = useState(null)
  const [mail, setMail] = useState({ sender:'', receiver:'', subject:'', content:'', date:'', status:'', visited:'none'  });
  const [loop, setLoop] = useState([]);
  const [singleMail, setSingleMail] = useState();
  const [sender, setSender] = useState();
  

  //Fetch mails
  
  
  const fetchHandler = async (sender) => {
    
        await axios.post('http://localhost:8080/to', {mail:sender})
      .then(res => {setShowPost(res.data)})
      .catch((err)=>console.log(err))
   }


  useEffect(()=> {
    auth.onAuthStateChanged( async user => {
      setCurrentUser({user})
      
     
    })

    
   
   //Post mails and save to the database
   const postHandler = async () => {
    await axios.post('http://localhost:8080/mail', mail)
    .then(res => console.log(res))
    .catch((err)=>console.log(err))
    
   }

   if(mail.receiver !== ''){
     postHandler()
     fetchHandler(currentUser.user.email)
  }
  
  //  AUTH
  //displayName , email, photoURL
 

    },[mail])
  
  

    //Call mails as soon as page is loaded! 
  //Generate message pop
  //Message state

  return (
    <div className="main-container">
    {currentUser ? props.location.pathname !== '/login' ? <div>
    <Header currentUser={currentUser} />
    <Message currentUser={currentUser} setSender={setSender} loop={loop} setLoop={setLoop} mail={mail} setMail={setMail} />
    <div className="side-top-menu">
    <SideMenu loop={loop} setLoop={setLoop}/>
    <div className="top-mails-container">
    <TopMenu/>
    {props.location.pathname === '/' ? <BottomMenu/> : ''}
    <Switch>
    <Route exact path='/' render={() => (
            <MailLoop
              mail={mail}
              showPost={showPost}
              setSingleMail={setSingleMail}
            />
          )} />
            <Route exact path='/:id' render={() => (
            <SingleMail
            showPost={showPost}
            singleMail={singleMail}
            setSingleMail={setSingleMail}
              
            />
          )} />
    </Switch>
    
    </div>
    </div>
    </div> : <Route exact path='/login' component={Login} /> : 'loading'}
    
    
    </div>
  );
}




export default withRouter(App);
