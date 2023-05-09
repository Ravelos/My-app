function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Type the project's name"/>
            </div>
            <div>
                <input type="text" placeholder="Set a budget"/>
            </div>
            <select>
                <option disabled>Select category</option>    
            </select>
            <div>
                <input type="submit" value="Create project"/>
            </div>         
            
            
        </form>
    )
}

export default ProjectForm