import React, {useState} from 'react';
import './side-menu.scss'
import SIDE_MENU from './side-menu-data'



const SideMenu = ({setLoop, loop}) => {

    const [sideMenu, setSideMenuData] = useState(SIDE_MENU)

    //Generate message pop
    const loopHandler = () =>  {
        
      setLoop(oldArray => [...loop, loop.length])
      
  }
    console.log(sideMenu);

   return <section className="side-menu-container ">
       
        <div className="compose" onClick={loopHandler}> <i className="fas fa-plus"></i> Compose</div>

      <div className="menu-options-container border-bt">
      {sideMenu.map(menu => {
         return <div key={menu.id} className="menu-options hover-menu">
         <i className={menu.icon}></i>
         <h1>{menu.title}</h1>
         
         </div>
      })}
      </div>
       
   </section>

}

export default SideMenu;