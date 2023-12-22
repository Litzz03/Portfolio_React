import styles from './Sobre.module.css'
import avatar from './images/avatar.png'

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="avatar" className={styles.avatar}/>
        <h2>Sobre</h2>  
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        Imagens
      </div>  
    </section>
  )
}

export default Sobre