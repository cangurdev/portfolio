import Image from 'next/image'
export default function Logos() {
    return (
        <div className="flex space-x-8">
            <a href="https://www.github.com/cvngur" target="_blank">
                <Image src="/github.svg" alt="Github Logo" width={56} height={56} />
            </a>
            <a href="https://www.linkedin.com/in/cangur" target="_blank">
                <Image src="/linkedin.svg" alt="Linkedin Logo" width={56} height={56} />
            </a>
            <a href="https://twitter.com/CodeEmAll" target="_blank">
                <Image src="/twitter.svg" alt="Twitter Logo" width={56} height={56} />
            </a>
            <a href="https://can-gur.medium.com/" target="_blank">
                <Image src="/medium.svg" alt="Medium Logo" width={56} height={56} />
            </a>
        </div>

    )
}