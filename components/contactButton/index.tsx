import style from './style.module.css'

export default function ContactButton() {
    return (
        <a href="mailto:can.gur@yahoo.com" className={style.button}>
            Contact Me
        </a>
    )
}