import styles from '../components/layout/Loading.module.css'
import loading from '../loading.gif'

function Loading(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading"></img>
        </div>
    )
}

export default Loading;











