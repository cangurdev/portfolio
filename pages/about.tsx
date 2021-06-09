import Image from 'next/image'
import Logos from '../components/logos'

export default function About() {
    return (
        <div id="about" className="h-screen w-screen flex flex-col items-center text-white bg-background">
            <div className="flex w-screen justify-center sm:justify-end py-4 sm:px-8">
                <Logos />
            </div>
            <div className=" w-1/2 space-y-8 m-auto">
                <h2 className="text-5xl">
                    About Me
                </h2>
                <div className="flex space-x-8">
                    <p className="text-lg">
                        Hello! My name is Can. I am a fresh graduated Software Developer. 
                        Interested in web development for a while. 
                        I have done backend and frontend developments on various projects.
                        Currently, mainly I am working in Frontend development.
                    </p>
                    <img src="/profile.jpg" className="h-96 shadow-2xl" />
                </div>
            </div>
            <a href="#skills" className="animate-bounce m-auto">
                <Image src="/arrow.svg" alt="Down Arrow" width={56} height={56} />
            </a>
        </div>
    )
}