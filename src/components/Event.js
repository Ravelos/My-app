function Event({number}){

    function myEvent(){
        console.log(`I was activated ${number}`)
    }

    return(
        <div>
            <p>Click to trigger an event</p>
            <button onClick={myEvent}>Activate</button>
        </div>

    )
}
export default Event