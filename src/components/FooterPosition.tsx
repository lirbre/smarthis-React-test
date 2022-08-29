import Image from 'next/image'

interface FooterPositionProps {
  position: string
}

export const FooterPosition = ({ position }: FooterPositionProps) => {
  return (
    <a href="https://smarthis.com.br/contato/#maps">
      <div className="flex gap-[15px]">
        <Image
          src={'/icons/position.svg'}
          width={24}
          height={24}
          alt={'Position marker icon'}
        />
        <p className="text-[#fff]">{position}</p>
      </div>
    </a>
  )
}
