import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/header/header.component'

import {HomePage} from './pages/homepage/homepage.component';
import {ShopPage} from './pages/shop/shop.component';
import {SignInAndSignOutPage} from "./components/sign-in-and-sign-out/sign-in-and-sign-out.component";


function App() {
    return (
        <div>
            <Header/>
            <div>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signIn' component={SignInAndSignOutPage}/>
            </div>
        </div>
    );
}

export default App;
