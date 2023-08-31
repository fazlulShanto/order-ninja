
export interface IUserContext{
    id : string,
    token : string,
    email : string,
    role :string,
    name : string,
    first_name: string,
    last_name: string,
    cart ?: object,
    loggedIn ?: boolean,
    upd ? : number
    
}

export interface IUserLocalInfo {
    id: string,
    token: string,
    email: string,
    role: string,
    name: string,
    first_name: string,
    last_name: string,
    cart ?: object,
    loggedIn ?: boolean
    raw_user: string
  }
  