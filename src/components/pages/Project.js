import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project(){
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

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

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    return(
        <>{project.name ? (
            <Container>
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
                            <p>Project's details</p>
                        </div>
                    )}
                </div>
            </Container>
        ) : (<Loading/>)}</>
    )
    
}

export default Project