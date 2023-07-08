import { Footer } from 'flowbite-react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

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
              href="#"
              icon={BsInstagram}
              />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              />
              </div>
          </div>
        </div>
      </div>
    </Footer>
  )
}