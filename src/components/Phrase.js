import styles from './Phrase.module.css'

function Frase(){
    return(
        <div className={styles.phraseContainer}>
            <p className={styles.phraseContent}>This is a component with a phrase!</p>
        </div>
    )
}

export default Frase