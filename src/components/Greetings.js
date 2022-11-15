function Greetings({name}){
    function greet(someName){
        return `Hello,${someName}! What's up?`
    }
    return<>{name && <p>{greet(name)}</p>}</>
}
export default Greetings