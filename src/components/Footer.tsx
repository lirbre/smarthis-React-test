import Image from 'next/image'

import { FooterPosition } from './FooterPosition'

export const Footer = () => {
  return (
    <footer className="flex min-h-[424px] w-full items-center justify-center bg-[#0e0e0e] px-4 pt-[52px] pb-8">
      <div className="flex w-full max-w-[1324px] flex-col gap-8">
        <h4 className="font-bold text-[#01ffa9]">Fale Conosco</h4>
        <div className="flex flex-col gap-2">
          <small className="font-normal text-[#fff]">+55 11 5225-8126</small>
          <small className="font-normal text-[#fff]">+55 11 5225-8126</small>
          <a
            className="font-normal text-[#fff]"
            href="mailto:https://mail.google.com/mail/u/2/"
            rel="noreferrer"
          >
            <small>brenoliradev@gmail.com</small>
          </a>
        </div>
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 xl:gap-20">
            <FooterPosition position="Rio de Janeiro" />
            <FooterPosition position="São Paulo" />
            <FooterPosition position="Miami" />
            <FooterPosition position="Buenos Aires" />
          </div>
          <div className="flex gap-3">
            <div className="flex h-[52px] w-[52px] items-center justify-center bg-[#01ffa9]">
              <Image
                src={'/logos/linkedin.svg'}
                width={24}
                height={24}
                alt={'Linkedin Logo'}
              />
            </div>
            <div className="flex h-[52px] w-[52px] items-center justify-center bg-[#01ffa9]">
              <Image
                src={'/logos/instagram.svg'}
                width={24}
                height={24}
                alt={'Linkedin Logo'}
              />
            </div>
          </div>
        </div>
        <small className="w-full border-t border-[#3c3e3e] pt-3 text-center text-[#fff]/50 md:text-left">
          © {new Date().getFullYear()} Breno - Todos os direitos reservados
        </small>
      </div>
    </footer>
  )
}
