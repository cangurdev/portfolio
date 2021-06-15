import Image from 'next/image'
import ContactButton from '../../components/contactButton'
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
                <a href="#about" className="animate-bounce m-auto">
                    <Image src="/arrow.svg" alt="Down Arrow" width={56} height={56} />
                </a>
            </div>
        </div>

    )
}
