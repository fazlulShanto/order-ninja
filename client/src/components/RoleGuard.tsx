
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getLocalUserInfo } from '../utils/helpers/setUserLocalInfo';

function RoleGuard({allowedRoles} : any) {

    // check if auth has info 
    const oldData = getLocalUserInfo();
    console.log(oldData)
    // if(oldData.r)
    // const { user_id,loggedIn,roles,setUserId,setLoggedIn,setRoles} = useAuth();

    // console.log(`old data here `,oldData);
    // const {
    //     user_id,setUserId,
    //     token,setToken,
    //     // name,
    //     setName,
    //     // email,
    //     setEmail,
    //     roles,setRoles,
    //     loggedIn,setLoggedIn,
    //     // cart,
    //     setCart
    // } = useAuth();
    // console.log(oldData)
    // if(oldData.loggedIn &&  oldData.token && (!user_id ) && (!token)){
    //     setUserId(oldData.id);
    //     setRoles(JSON.stringify(oldData.roles));
    //     setEmail(oldData.email);
    //     setToken(oldData.token);
    //     setName(oldData.name);
    //     setLoggedIn(true);
    //     setName(oldData.name);
    //     if(oldData.cart){
    //         setCart(JSON.stringify(oldData.cart));
    //     }
    // }
    const { loggedIn ,role  } = oldData;
    // console.log("latest : ",latestLogg, oldData.roles);
    console.log('allowed ',allowedRoles,'my role',oldData.role);
    const isAllowed = allowedRoles.includes(role);
    // const location = useLocation();
    // // let  objRole = JSON.parse(roles);
    //  const  objRole = Object.values(oldAuth.roles);
    // // console.log(location);
    
    console.log('roles' , allowedRoles ,'my roles ',role , 'verdict : ',isAllowed);
    
    if( isAllowed && loggedIn){
        return <Outlet />
    }
    // if(loggedIn){
    //     return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    // }
    return  <Navigate to="/login"  />;
}

export default RoleGuard;
