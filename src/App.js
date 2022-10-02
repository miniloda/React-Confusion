
import './App.css';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
     </BrowserRouter>
  );
    }
}

export default App;