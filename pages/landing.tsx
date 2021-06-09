import Image from 'next/image'
import ContactButton from '../components/contact_button'
import Logos from '../components/logos'

export default function Landing() {
    return (
        <div className="h-screen w-screen flex flex-col text-white space-y-8 bg-background" >
            <div className="flex justify-center sm:justify-end py-4 sm:px-8">
                <Logos />
            </div>
            <div className="flex items-center justify-around w-screen h-3/5">
                <div className="flex flex-col items-center text-center space-y-8">
                    <h1 className="text-6xl sm:text-8xl">CAN GüR</h1>
                    <h2 className="text-3xl smtext-5xl sm:ml-24">Frontend Developer</h2>
                    <p className="text-lg sm:text-2xl sm:mx-8 w-96">I’m currently living in Istanbul. Interested in frontend and backend development in the web field.</p>
                </div>
                <div className="hidden sm:block text-4xl space-y-8">
                    <a href="#about">About Me</a>
                    <p>Experience</p>
                    <p>Skills</p>
                </div>
            </div>
            <div className="flex flex-col space-y-8 items-center">
                <div className="m-auto">
                    <ContactButton />
                </div>
                <a href="#about" className="animate-bounce m-auto">
                    <Image src="/arrow.svg" alt="Down Arrow" width={56} height={56} />
                </a>
            </div>
        </div>

    )
}
