import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
function Home() {
  return (
    <section className={styles.home_container}>
      <h1> Welcome to <span>Costs</span></h1>
      <p>Start to manage your projects right away!</p>
      <LinkButton to="/newproject" text="Create a project" />
      <img src={savings} alt='Costs'/>
    </section>
 
  )
}

export default Home;
