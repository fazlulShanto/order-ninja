export interface IUseAuthHook{
    user_id : string,
    setUserId : (a : string) => void,
    token : string,
    setToken : (a : string) => void,
    name : string,
    setName : (name : string) => void,
    email : string,
    setEmail : (name : string) => void,
    role : string,
    setRole : (role : string)=> void,
    loggedIn : boolean,
    setLoggedIn : (v : boolean)=> void,
    cart : string,
    setCart : (token : string) => void,
    upd : number,
    setUpd : () => number,
}
