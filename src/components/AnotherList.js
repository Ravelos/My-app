function AnotherList(itens){
    return (
        <>
            <h3>Good Things' List:</h3>
           {itens.length > 0 ? (
           itens.map((item,index)=>(
            <p key={index}>{item}</p>
            ))):(
                <p>There is not any itens in the list</p>
            )}
        </>
    )
}

export default AnotherList