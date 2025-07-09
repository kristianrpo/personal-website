"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface IconProps {
  className?: string;
}

export default function LinkedinIcon({ className }: IconProps) {
  return <FontAwesomeIcon icon={faLinkedin} className={`${className}`} />;
}
