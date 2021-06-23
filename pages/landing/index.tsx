import ContactButton from '../../components/contactButton'
import DownArrow from '../../components/downArrow'
import styles from './style.module.css'

export default function Landing() {
    return (
        <div className={styles.container} >
            <div className={styles.body}>
                <div className="space-y-2">
                    <p className={styles.hello} >Hi, my name is</p>
                    <h1 className={styles.name}>CAN GüR</h1>
                </div>
                <h2 className={styles.title}>Frontend Developer</h2>
            </div>
            <div className={styles.button}>
                <ContactButton />
                <DownArrow link="#about" />
            </div>
        </div>

    )
}
