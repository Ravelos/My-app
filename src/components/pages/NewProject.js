import {useNavigate} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject() {
  
  const history = useNavigate()

  function createPost(project){
    //Initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch('htpp://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      history('/projects', {message:'Project successfully sent'})
    })
    .catch((err) => console.log(err))
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Create your Project</h1>
      <p>Create a new project and then add the services</p>
      <ProjectForm handleSubmit={createPost} btnText="Create project"/>
    </div>
  );
}

export default NewProject;
