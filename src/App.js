import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import WelcomeLight from './Pages/WelcomeLight';
import MenuLight from './Pages/MenuLight';
import ChooseLight from './Pages/ChooseLight';
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

        <Route path='/choose-light' element={<ChooseLight />} />
        <Route path='/menu-light/:category' element={<MenuLight data={dataMenu} />} />
      </Routes>
    </div>
  );
}

export default App;
