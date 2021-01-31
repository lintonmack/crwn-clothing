import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/header/header.component'
import {auth} from './firebase/firebase.utils';

import {HomePage} from './pages/homepage/homepage.component';
import {ShopPage} from './pages/shop/shop.component';
import {SignInAndSignOutPage} from "./components/sign-in-and-sign-out/sign-in-and-sign-out.component";


export const App = class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});

            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <div>
                    <Route exact path='/' component={
                        HomePage
                    }
                    />
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signIn' component={SignInAndSignOutPage}/>
                </div>
            </div>
        )
            ;
    }
}

export default App;
