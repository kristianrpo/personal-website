import { JSX } from "react";
import ButtonLinkIcon from "@/components/atoms/buttons/ButtonLinkIcon";
import GithubIcon from "@/components/atoms/icons/Github";
import LinkedinIcon from "@/components/atoms/icons/Linkedin";
import data from "@/data/page_content.json";
import { personalEmail } from "@/constants/contact";

export default function NavBar(): JSX.Element {
  const { githubUrl, linkedinUrl } = data.Navbar;
  return (
    <nav className="my-5 text-white border-b border-gray-700 bg-[#121417]">
      <div className="container mx-auto px-4 py-2 flex justify-center flex-col sm:justify-between sm:flex-row items-center">
        <div className="text-xl font-bold mx-2 mb-2 sm:mb-0 sm:mx-0">{personalEmail}</div>
        <div className="flex space-x-4">
          <ButtonLinkIcon href={githubUrl}>{<GithubIcon />}</ButtonLinkIcon>
          <ButtonLinkIcon href={linkedinUrl}>{<LinkedinIcon />}</ButtonLinkIcon>
        </div>
      </div>
    </nav>
  );
}
