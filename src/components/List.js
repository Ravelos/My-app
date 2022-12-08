import Item from "./Item"

function List(){
    return(
        <>
            <h1>My List </h1>
                <ul>
                    <Item brand='Ferrari' release_year={1985}/>
                    <Item brand='Fiat' release_year={2000}/>
                    <Item brand='Renault' release_year={2018}/>
                    <Item/>
                </ul>            
        </>
    )
}
export default List