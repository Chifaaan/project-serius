import { Footer } from 'flowbite-react';
import { BsGithub, BsInstagram, BsDiscord } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Otakuturu ™ Copyright"
            href="#"
            year={2022}
          />
          <div className=" flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              target="_blank" rel="noopener noreferrer"
              href="https://www.instagram.com/tiwaibi.22/"
              icon={BsInstagram}
              />
            <Footer.Icon
              target="_blank" rel="noopener noreferrer"
              href="https://discord.gg/mC94kKxD"
              icon={BsDiscord}
              />
            <Footer.Icon
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/Chifaaan/project-serius"
              icon={BsGithub}
              />
              </div>
          </div>
        </div>
      </div>
    </Footer>
  )
}