import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

function Project(){
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()


    useEffect(() => {
      setTimeout(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setProject(data);
          })
          .catch((err) => console.log(err));
      }, 300);
    }, [id]);

    function editPost(project){
        // budget validation
        if(project.budget < project.cost){
            setMessage("Budget cannot be lower than project's cost")
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/${project.id}`,{
            method:'PATCH',
            headers: {
                'Content-Type':'aplication/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) =>{
            setProject(data)
            setShowProjectForm(false)
            setMessage("Project updated")
            setType('success')
        })
        .catch((err) => console.log(err))

    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    return(
        <>{project.name ? (
            <Container customClass="column">
                {message && <Message type={type} msg={message} />}
                <div className={styles.details_container}>
                    <h1>Project: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>
                        {!showProjectForm ? 'Edit project' : 'Close'}
                    </button>
                    {!showProjectForm ? (
                        <div className={styles.project_info}>
                            <p> <span>Category:</span>{ project.category.name }</p>
                            <p><span>Total budget:</span>Rs {project.budget}</p>
                            <p><span>Budget used:</span>Rs {project.cost}</p>

                        </div>
                    ) : (
                        <div className={styles.project_info}>
                            <ProjectForm 
                                handleSubmit={editPost}
                                btnText="Finish"
                                projectData={project}
                            />
                        </div>
                    )}
                </div>
            </Container>
        ) : (<Loading/>)}</>
    )
    
}

export default Project