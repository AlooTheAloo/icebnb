import Cookies from "js-cookie";
import { USERIDKEY } from "./consts";

export function isLoggedIn(){ 
    return Cookies.get(USERIDKEY) != undefined;
}

export function logOut(){ 
    Cookies.remove(USERIDKEY);
}

export function login(userid:string){ 
    Cookies.set(USERIDKEY, userid);
}

export function getUserID(){
    return Cookies.get(USERIDKEY);
}