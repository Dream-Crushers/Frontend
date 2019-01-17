import jwtDecode from 'jwt-decode';

const tokenkey = "authToken";

export function setJwt(token){
    localStorage.setItem(tokenkey,token);
}

export function getJwt(){
    localStorage.getItem(tokenkey);
}

export function logout(){
    localStorage.removeItem(tokenkey);
}

export function getUser(){
    try{
        const jwt = localStorage.getItem(tokenkey);
        return jwtDecode(jwt)
    }
    catch(ex){
        console.log(ex);
    }
  
}

export default{
    setJwt,
    getJwt,
    getUser,
    logout
}