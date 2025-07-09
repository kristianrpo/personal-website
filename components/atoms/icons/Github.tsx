"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface IconProps {
  className?: string;
}

export default function GithubIcon({ className }: IconProps) {
  return <FontAwesomeIcon icon={faGithub} className={`${className}`} />;
}
