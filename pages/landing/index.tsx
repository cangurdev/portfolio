import Image from 'next/image'
import ContactButton from '../../components/contactButton'
import styles from './style.module.css'

export default function Landing() {
    return (
        <div className={styles.container} >
            <div className={styles.body}>
                    <p className={styles.hello} >Hi, my name is</p>
                    <h1 className={styles.name}>CAN GüR</h1>
                    <h2 className={styles.title}>Frontend Developer</h2>
                    <p className={styles.description}>I am currently living in Istanbul. Interested in frontend and backend development in the web field.</p>
            </div>
            <div className={styles.button}>
                <ContactButton />
                <a href="#about" className="animate-bounce m-auto">
                    <Image src="/arrow.svg" alt="Down Arrow" width={56} height={56} />
                </a>
            </div>
        </div>

    )
}
