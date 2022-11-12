import Button from "./event/Button"

function Event({number}){

    function myEvent(){
        console.log('activating first event')
    }

    function secondEvent(){
        console.log('activating second event')
    }

    return(
        <div>
            <p>Click to trigger an event</p>
            <Button event={myEvent} text="First event"/>
            <Button event={secondEvent} text="Second event"/>
        </div>

    )
}
export default Event