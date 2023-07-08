import { Footer } from 'flowbite-react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container>
      <div className="w-full my-[150px] bottom-0 left-0 min-h-[5%]">
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Chifan & OneWizard™"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.instagram.com/rachmadhani_k/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/Chifaaan/project-serius"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}