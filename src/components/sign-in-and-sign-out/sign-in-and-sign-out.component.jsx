import React from 'react';
import {SignIn} from "../sign-in/sign-in.component";
import {SignUp} from "../sign-up/sign-up.component";
import './sign-in-and-sign-out.component.styles.scss';

export const SignInAndSignOutPage = () => (
    <div className="sign-in-and-sign-out">
        <SignIn />
        <SignUp />
    </div>
)
