import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();
function  AuthContextProvider(props){
  const [loggedIn, setLoggedIn] = useState(undefined);

   function getLoggedIn() {
  axios.get("http://localhost:5000/isLoggedIn", {
    withCredentials:true
  }).then(function(res){
    
    console.log(res.data); 
    setLoggedIn(res.data);
    console.log(loggedIn); 

  });
}

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
//export {checkLogin};