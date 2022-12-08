import { useState } from "react";

function Conditional(){

    const[email,setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function sendEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function cleanEmail(e){
        e.preventDefault()
        setUserEmail('')
    }
    return(
        <div>
            <h1>Register your email:</h1>
            <form>
                <input 
                    type="email" 
                    placeholder="Type your email..."                    
                    onChange={(e)=>setEmail(e.target.value)}
                />
                
                <button 
                    onClick={sendEmail}
                    >Send-email
                </button>             
                {userEmail && (
                    <div>
                        <p>User's email is: {userEmail} </p>
                        <button 
                             onClick={cleanEmail}
                             >Clean-email
                        </button>
                    </div>
                    
                )}
            </form>

        </div>
    )
}

export default Conditional