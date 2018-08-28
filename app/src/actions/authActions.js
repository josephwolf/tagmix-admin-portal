import Cookies from 'js-cookie'

export const logIn = (user, pwd) => {
    //This is obviously abysmal security. (The real site password was something else)
    //Kept pushing for something more robust but it was never prioritized :(
    if (user === 'user' && pwd === 'password') {

        Cookies.set('loggedIn', true, {expires: 7});

        return {
            type: 'LOG_IN'
        }
    }

    return {
        type: 'INCORRECT_PWD'
    }
};

export const checkAuth = () => {
    let loggedIn;

    if (Cookies.get('loggedIn')) {
        loggedIn = Cookies.get('loggedIn')
    } else {
        loggedIn = false;
    }

    return {
        type: 'LOGGED_IN_STATUS',
        loggedIn
    }
};

export const logOut = () => {
    Cookies.remove('loggedIn');

    return {
        type: 'LOG_OUT'
    }
};
