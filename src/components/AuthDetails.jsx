import React, {useEffect, useState} from 'react';
import {auth} from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
function AuthDetails() {
    const AuthDetails = () =>{
        const[ authUser, setAuthUser]=useState(null);
        useEffect(()=>{
            const listen =onAuthStateChanged(auth, (user) =>{
                if(user){
                   setAuthUser(user);
                }
                else{
                    setAuthUser(null);
                }
            });
            return()=>{
               listen()
            }
        }, [])
        const userSignOut = () =>{
          signOut(auth).then(() =>{
            console.log("singout successfull")
          }).catch(error=>console.log(error))
        }
    
  return (
    <div>
      <div>{ authUser  ? <><p>{`SignedIn as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>SignedOut</p>}</div>
    </div>
  )
}
}
export default AuthDetails;
