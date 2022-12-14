import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import Home from './HomeComponent';
import Menu from "./MenuComponent";
import {DISHES} from "../shared/dishes";
import { Component } from 'react';
import DishDetail  from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  render(){
    const HomePage = () => {
      return(
        <Home />
      );
    }
    return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path = "/menu" component={() => <Menu dishes={this.state.dishes} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
    );
    }
}

export default Main;