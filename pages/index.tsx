import ContactButton from '../components/contact_button'
import Logos from '../components/logos'

export default function Home() {
  return (
    <div className="h-screen text-white space-y-8 bg-indigo-600" style={{ backgroundImage: "url('/cover.jpg')", backgroundSize: "cover", opacity:0.9, }}>
      <div className="flex justify-end py-4 px-8">
        <Logos />
      </div>
      <div className="flex items-center justify-around m-auto h-3/5">
        <div className="space-y-8">
          <h1 className="text-8xl">CAN GüR</h1>
          <h2 className="text-5xl mx-24">Frontend Developer</h2>
          <p className="text-2xl mx-8 w-96">I’m currently living in Istanbul. Interested in frontend and backend development in the web field.</p>
        </div>
        <div className="text-4xl space-y-8">
          <p>About Me</p>
          <p>Experience</p>
          <p>Skills</p>
        </div>
      </div>
      <div className="flex flex-col space-y-8 items-center">
        <div className="m-auto">
          <ContactButton />
        </div>
        <p className="animate-bounce m-auto">
          \/
        </p>
      </div>

    </div>

  )
}
