import Image from 'next/image'
import styles from './style.module.css'

export default function About() {
    return (
        <div id="about" className={styles.container}>
            <div className={styles.body}>
                <h2 className="text-3xl sm:text-5xl">
                    About Me
                </h2>
                <hr></hr>
                <div className={styles.content}>
                    <div className="flex flex-col space-y-8">
                        <p className="md:text-md sm:text-lg">
                            Hello! My name is Can. I am a fresh graduated Software Developer.
                            Interested in web development for a while.
                            I have done backend and frontend developments on various projects.
                            Mainly, I am working in Frontend development in these days.
                    </p>
                        <p className="text-md">Here are a few technologies I've been working with recently:</p>
                        <ul className={styles.list}>
                            <li>• Javascript</li>
                            <li>• React</li>
                            <li>• Vue</li>
                            <li>• HTML</li>
                            <li>• CSS</li>
                            <li>• Tailwind CSS</li>
                            <li>• Golang</li>
                            <li>• MySQL</li>
                            <li>• MongoDB</li>
                            <li>• Git</li>
                            <li>• Jira</li>
                            <li>• Figma</li>
                        </ul>
                    </div>
                    <img src="/profile.jpg" className={styles.image} />
                </div>
            </div>
            <a href="#skills" className="animate-bounce">
                <Image src="/arrow.svg" alt="Down Arrow" width={56} height={56} />
            </a>
        </div>
    )
}