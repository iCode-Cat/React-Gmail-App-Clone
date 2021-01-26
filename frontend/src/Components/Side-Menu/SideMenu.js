import React, {useState} from 'react';
import './side-menu.scss'
import SIDE_MENU from './side-menu-data'



const SideMenu = () => {

    const [sideMenu, setSideMenuData] = useState(SIDE_MENU)
    console.log(sideMenu);

   return <section className="side-menu-container ">
       
        <button className="compose"> <i class="fas fa-plus"></i> Compose</button>

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