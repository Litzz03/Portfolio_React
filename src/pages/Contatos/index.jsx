
import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'

function Contatos() {
  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre.</p>
      <div className={styles.icones}>
        <a href="mailto:luizgustavoboldori03@gmail.com" target='_blank' rel='noopener nooreferrer'>
          <GoMail className={styles.icone} />
        </a>
        <a href="https://www.instagram.com/luizgusttaa" target='_blank' rel='noopener nooreferrer'>
          <BsInstagram className={styles.icone} />
        </a>
        <BsYoutube className={styles.icone} />
        <BsGithub className={styles.icone} />
        <BsLinkedin className={styles.icone} />
      </div>
    </section>
  )
}

export default Contatos