function Form(){
    function registerUser(e){
        e.preventDefault()
        console.log('The user was registered')
    }
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <div>
                    <input type="text" placeholder="Type your name"/>
                </div>
                <div>
                <input type="submit" value="register"/>
                </div>
            </form>
        </div>
    )
}

export default Form