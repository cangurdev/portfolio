import styles from './style.module.css'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <a href="#about">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
        </div>
    )
}