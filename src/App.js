
import './App.css';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { Component } from 'react';
import Main from './components/MainComponent';
class App extends Component{
  render(){
    return (
    <div>
      <Main />
    </div>
  );
    }
}

export default App;