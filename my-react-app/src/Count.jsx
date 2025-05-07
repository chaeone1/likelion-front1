import React, {useState} from "react";

const Count =()=>{
    
    const [number, setNumber] = useState(0);

    const addNumber = () => {
        setNumber(number+1)
    }
    const deleteNumber = () => {
        setNumber(number-1)

       

        
        };
    
 
    return(
        <div>
            <p>count: {number}</p>
            <button onClick={addNumber}>add</button>
            <button onClick={deleteNumber}>delete</button>

        </div>

    );
}
export default Count;
