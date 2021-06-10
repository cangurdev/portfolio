import Image from 'next/image'

export default function About() {
    return (
        <div id="about" className="h-screen w-screen flex flex-col items-center justify-between text-white bg-background">
            <div className="w-1/2 h-2/3 space-y-8 m-auto">
                <h2 className="text-5xl">
                    About Me
                </h2>
                <div className="flex space-x-8">
                    <p className="text-lg">
                        Hello! My name is Can. I am a fresh graduated Software Developer. 
                        Interested in web development for a while. 
                        I have done backend and frontend developments on various projects.
                        Mainly, I am working in Frontend development in these days.
                    </p>
                    <img src="/profile.jpg" className="h-96 shadow-2xl" />
                </div>
            </div>
            <a href="#skills" className="animate-bounce">
                <Image src="/arrow.svg" alt="Down Arrow" width={56} height={56} />
            </a>
        </div>
    )
}