import React            from 'react';
import { observer }     from 'mobx-react';
import UserStore        from '../components/stores/UserStore';
import LoginForm        from '../components/LoginForm';
import SubmitButton     from '../components/submitButton';


// import GoogleLogin from 'react-google-login'

class App extends React.Component {
    
    async componentDidMount() {
        try {

            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();

            if(result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }

        }
        catch(e) {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }

    async doLogout() {
        try {

            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();

            if(result && result.success) {
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }

        }
        catch(e) {
            console.log(e)
        }
    }

    render() {
        if (UserStore.loading){
            return (
                <div className="app">
                    Loading, plese wait...
                </div>
            );
        }
        else {

            if(UserStore.isLoggedIn) {
                return (
                    <div className="app">
                        Welcome, {UserStore.username}

                        <SubmitButton 
                            text={'Log out'}
                            disabled={false}
                            onClick={ () => this.doLogout() }
                        />
                    </div>
                );
            }
            return( 
                <div className="app">
                    <SubmitButton 
                            text={'Log out'}
                            disabled={false}
                            onClick={ () => this.doLogout() }
                        />
                    <LoginForm />
                </div>
            );
        }
    }

}







// function App () {

//     const responseSuccessGoogle = (response) => {
//         console.log(response)
//     }
//     const responseErrorGoogle = (response) => {
        
//     }


//     return (
//         <div className="App">
//             <h1>Login with Google</h1>

//             <GoogleLogin
//                 clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//                 buttonText="Login with Goole"
//                 onSuccess={responseSuccessGoogle}
//                 onFailure={responseErrorGoogle}
//                 cookiePolicy={'single_host_origin'}
//             />,
//         </div>
//     )
// }

export default observer(App);