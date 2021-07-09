import React , {useState} from 'react';
import WrapperGiver from '../../component/Wrapper-Box/WrapperGiver';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import "./LoginPageGiver.css";
import { useContext } from 'react';
import ContextObj from '../../Context-Api/ContextFile';

const clientId = "481407791682-r8vmoicajn0nh7en29uqc0jbefjgf6v2.apps.googleusercontent.com";

function LoginPageGiver() {
    const contextValue = useContext(ContextObj);
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    

    function onLoginSuccess(res) {
        console.log(res.profileObj);
        setShowlogoutButton(true);
        setShowloginButton(false);
        contextValue.userLogHandler(true , res.profileObj);
    }

    function onLoginFailure(res) {
        console.log(res);
    }

    function onSignoutSuccess() {
        setShowloginButton(true);
        setShowlogoutButton(false);
        contextValue.userLogHandler(false , {});
    }

    return (
        <WrapperGiver className = "LoginPage__MainContainer">
        {showloginButton ? <GoogleLogin
            clientId={clientId}
            buttonText="Sign In"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        /> : ""}
        {showlogoutButton ? <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
        /> : ""}
        
        </WrapperGiver>
    )
}

export default LoginPageGiver;
