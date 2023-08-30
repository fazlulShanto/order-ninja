import React from 'react'
interface Mycomp {
    icon : string,
    text : string
}
const  UserProfile =({icon , text} ) : React.FC<Mycomp> =>{
    return(
        <div className="icontext-contianer">
            <div className="icon-part">{icon}</div>
            <div className="text-part">{text}</div>
        </div>
    );
}

export default UserProfile;