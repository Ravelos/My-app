import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Create your Project</h1>
      <p>Create a new project and then add the services</p>
      <ProjectForm/>
    </div>
  );
}

export default NewProject;
