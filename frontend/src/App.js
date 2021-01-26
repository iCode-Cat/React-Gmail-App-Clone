import './App.css';
import Header from './Components/Header/Header';
import SideMenu from './Components/Side-Menu/SideMenu';
import TopMenu from './Components/Top-Menu/TopMenu';
import './Global/global.scss'
function App() {
  return (
    <div className="main-container">
  
    <Header/>
    <div className="side-top-menu">
    <SideMenu/>
    <TopMenu/>
    </div>
    </div>
  );
}

export default App;
