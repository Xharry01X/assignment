import React, { createContext, useEffect, useState } from 'react';
import base64 from "base-64";

const UserContext = createContext();

const Context = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  
  

  const decodeJWtToken = async () => {
    try {
      const jwtToken = await localStorage.getItem("Token");
    
      if (jwtToken) {
        const [headerEncoded, payloadEncoded, signatureEncoded] = jwtToken.split('.');
        const decodedToken = {
          header: JSON.parse(base64.decode(headerEncoded)),
          payload: JSON.parse(base64.decode(payloadEncoded)),
          signature: signatureEncoded, 
        };
     
         
      
        const userId = decodedToken.payload.user.id;
        setUserId(userId);
        setAuthenticated(true); 
      } else {
        setUserId("");
        setAuthenticated(false); 
        
      }
    } catch (error) {
     console.log(error)
    } 
  }

  useEffect(() => {
    decodeJWtToken();
  }, []);


  return (
    <UserContext.Provider value={{ userId, setUserId, authenticated, setAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, Context }; 
