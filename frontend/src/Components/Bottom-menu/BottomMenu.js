import React, {useState} from 'react';
import Login from '../Login/Login';
import './bottom-menu.scss'
const BottomMenu = () => {


 const [activeClass, setActiveClass] = useState({

     links:[{
         id:1,
         i:'fa-inbox',
         name:'Primary'
     },
     {
        id:2,
        i:'fa-user-friends',
        name:'Social'
     },
     {
        id:3,
        i:'fa-tag',
        name:'Promotions'
     }
    ],
    currentId:1
 });

 
   const idHandler = (id) => {

    setActiveClass((prevStyle) => ({
        ...prevStyle,
        currentId:id
    }))
    

   }
   console.log(activeClass.currentId);

    return <div className="bottom-menu-container border-bt">
    
    {
        activeClass.links.map((a)=>(
            <div className={`bottom-option ${a.id === activeClass.currentId && 'bottom-active'+a.id }`} onClick={()=>{idHandler(a.id)}}>
        <i className={`fas ${a.i}`}></i>
        <h2>{a.name}</h2>
        </div>
        ))
    }
    
    </div>

}

export default BottomMenu;