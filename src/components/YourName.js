
function YourName({setName}){
    
    return(
        <div>
            <p>Type your name:</p>
            <input type="text" placeholder="What is your name?"
             onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}
export default YourName