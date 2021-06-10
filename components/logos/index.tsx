import Image from 'next/image'
import styles from './style.module.css'

export default function Logos() {
    return (
        <div className={styles.container}>
            <a href="https://www.github.com/cvngur" target="_blank" className={styles.logo}>
                <Image src="/github.svg" alt="Github Logo" layout="fill" objectFit="contain" />
            </a>
            <a href="https://www.linkedin.com/in/cangur" target="_blank" className={styles.logo}>
                <Image src="/linkedin.svg" alt="Linkedin Logo" layout="fill" objectFit="contain" />
            </a>
            <a href="https://twitter.com/CodeEmAll" target="_blank" className={styles.logo}>
                <Image src="/twitter.svg" alt="Twitter Logo" layout="fill" objectFit="contain" />
            </a>
            <a href="https://can-gur.medium.com/" target="_blank" className={styles.logo}>
                <Image src="/medium.svg" alt="Medium Logo" layout="fill" objectFit="contain" />
            </a>
        </div>

    )
}