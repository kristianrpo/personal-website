import { JSX } from "react";
import ButtonLinkIcon from "@/components/atoms/buttons/ButtonLinkIcon";
import GithubIcon from "@/components/atoms/icons/Github";
import LinkedinIcon from "@/components/atoms/icons/Linkedin";
import data from "@/data/pageContent.json";

export default function NavBar(): JSX.Element {
  const { githubUrl, linkedinUrl } = data.Navbar;
  return (
    <nav className="my-5 text-white border-b border-gray-700 bg-[#121417]">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">Kristian Restrepo Osorio</div>
        <div className="flex space-x-4">
          <ButtonLinkIcon href={githubUrl}>{<GithubIcon />}</ButtonLinkIcon>
          <ButtonLinkIcon href={linkedinUrl}>{<LinkedinIcon />}</ButtonLinkIcon>
        </div>
      </div>
    </nav>
  );
}
