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
  const [currentUser, setCurrentUser] = useState(null);
  const [mail, setMail] = useState({ sender:'', receiver:'', subject:'', content:'', date:'', status:'', visited:'none'  });
  const [loop, setLoop] = useState([]);
  const [singleMail, setSingleMail] = useState();


  //Fetch mails
  const fetchHandler = async () => {
    await axios.get('http://localhost:8080/mail')
    .then(res => {setShowPost(res.data)})
    .catch((err)=>console.log(err))
   }

  
  useEffect(()=> {
    fetchHandler()
   //Post mails and save to the database
   const postHandler = async () => {
    await axios.post('http://localhost:8080/mail', mail)
    .then(res => console.log(res))
    .catch((err)=>console.log(err))
    
   }
   if(mail.receiver !== ''){postHandler()
    fetchHandler()
  }
   
  //  AUTH
  //displayName , email, photoURL
  auth.onAuthStateChanged(user => {
    setCurrentUser({user})
    console.log(currentUser);
  })

    },[mail])

    //Call mails as soon as page is loaded! 
  //Generate message pop
  //Message state

  return (
    <div className="main-container">
    {props.location.pathname !== '/login' ? <div>
    <Header currentUser={currentUser} />
    <Message currentUser={currentUser} loop={loop} setLoop={setLoop} mail={mail} setMail={setMail} />
    <div className="side-top-menu">
    <SideMenu loop={loop} setLoop={setLoop}/>
    <div className="top-mails-container">
    <TopMenu/>
    <BottomMenu/>
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
    </div> : <Route exact path='/login' component={Login} /> }
    
    
    </div>
  );
}




export default withRouter(App);
