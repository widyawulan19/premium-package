import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import WelcomeLight from './Pages/WelcomeLight';
import dataMenu from './Data/DataMenu.json'
import MenuList from './Pages/MenuList';
import dataList from './Data/DataList.json';
import ChooseMenu from './Pages/ChooseMenu';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<WelcomeLight />} />

        <Route path='/choose-menu' element={<ChooseMenu />} />
        <Route path='/menu-list/:category' element={<MenuList data={dataList} />} />

      </Routes>
    </div>
  );
}

export default App;
