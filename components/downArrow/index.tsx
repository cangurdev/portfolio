import Image from 'next/image'

type ArrowProps = {
    link: string,
}

export default function DownArrow(props: ArrowProps) {
    return (
        <a href={props.link} className="animate-bounce m-auto">
            <Image src="/arrow.svg" alt="Down Arrow" width={56} height={56} />
        </a>
    )
}