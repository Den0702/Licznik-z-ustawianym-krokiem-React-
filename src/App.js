import React, {Component} from 'react';
import './App.css';
import User from './components/User';
import Form from './components/Form';

class App extends Component {
    
    // binding needed when this.changeValue is a ES5 method
    // this.changeValue = this.changeValue.bind(this);
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users
        }

        this.addUserName = this.addUserName.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    
    /* addUserName() {
    } */
    
    addUser(name) {
        console.log("addUser():" + name);
        const newUser = { name: name }; 

        this.setState({
            users: [...this.state.users,  newUser]
        }) 
        
    }
    
    usersList = this.state.users.map(user => <User name={user.name}/>)

    render() {
        return (
            <div className="App">
                <header className="App-header"><h4>Lista użytkowników</h4></header>
                
                <Form addUserName={this.addUser} />

                <ul className="users-list">
                    {this.usersList}
                </ul>
            </div>
        );
    }
}

export default App;
