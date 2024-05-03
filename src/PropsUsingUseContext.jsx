import React, { createContext, useState } from 'react'
import { useContext } from 'react';

const Context = createContext();

function PropsUsingUseContext() {

    const [user, setuser]=useState("Na Enga Iruken!!!")

  return (
     <div>
      <Context.Provider value={user}>
        <h1>Hi iam Parent</h1>
        <Comp1 />
      </Context.Provider>
     </div>
  );
}
function Comp1() {
   const coursename = useContext(Context)
   return( 
    <>
     <h1>Comp1</h1>
     <p>{coursename}</p>
  </> 
);

}
export default PropsUsingUseContext