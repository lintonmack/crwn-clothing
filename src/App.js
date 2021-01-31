import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            }
            this.setState({currentUser: userAuth });
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
