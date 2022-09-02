import {getCookie} from "./cookies.helper";
import { Store } from "redux";
import {isJson} from "./utils.helper"

const _checkStatus = async (response) => {
    if(response.status === 401){
        try {
            const json = await response.json();
            const {auth} = Store.getState();
            if(auth.loggedIn){
                alert(json.message);
                // store.dispatch(AuthActions.logout());
            }

        } catch (e){

        }
    }
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        try {
            const json = await response.json();
            error = new Error(json.message);
        } catch (e){}
        error.response = response
        throw error
    }
}

export const getToken = () =>{
    return getCookie("token");
}

export const fetcher = (url, options, secure= false) =>{

    // performs api calls sending the required authentication headers
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (secure) {
        headers['Authorization'] = 'Bearer ' + getToken()
    }
    if(options.headers){
        headers = {
            ...headers,
            ...options.headers
        }
    }


    if (options.body instanceof FormData){
        delete headers['Content-Type'];
    }
    else if (isJson(options.body)){
        headers['Content-Type'] = "application/json"
        options.body = JSON.stringify(options.body);
    }

    return fetch(url, {
        headers,
        ...options
    }).then(_checkStatus).then(response => response.json());
}