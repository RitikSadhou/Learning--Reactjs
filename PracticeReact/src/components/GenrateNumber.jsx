import { memo } from "react";

export const GenrateRandomNumber=memo(({ randomNumber, 
    GenrateRandomNumber})=>{
    console.log("Genrate Random Number component Renederd");
    return (

        <>
        
        <h2>Random Number:{randomNumber}</h2>
        <button onClick={GenrateRandomNumber}>Genrate Rando Number</button>
        </>
    )

    })