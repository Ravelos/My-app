function Person({name, age, profession, picture}){
    return
        <div>
            <img src={picture} alt={name} />
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
        </div>
    
    }
export default Person