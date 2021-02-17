import React, {Component} from 'react';
import logo from './components/logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {TodoApp} from "./components/TodoApp";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props); 
        localStorage.setItem("email","jose@gmail.com");
        localStorage.setItem("password","Hola123");
    }

    LoginView = () => (
        <Login/>
    );
    TodoAppView = () => (
        <TodoApp/>
    );



    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>   
                    <br/>
                    <ul>
                        {localStorage.getItem('IsLoggedIn') === "true" ?
                            <div>
                                <Link to="/todo">Login</Link>
                                <Route exact path = "/todo" component={this.TodoAppView}/>
                            </div>
                            :
                            <Route exact path="/" component={this.LoginView}/>
                        }
                    </ul>
                </div>
            </Router>
        );
    }
}
export default App;
