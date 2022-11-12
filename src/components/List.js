import Item from "./Item"

function List(){
    return(
        <>
            <h1>My List </h1>
                <ul>
                    <Item brand='Ferrari'/>
                    <Item brand='Fiat'/>
                    <Item brand='Renault'/>
                </ul>            
        </>
    )
}
export default List