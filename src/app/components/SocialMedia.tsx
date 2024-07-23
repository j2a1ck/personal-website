import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Array of social media link objects
const SocialMediaLinks = [
  {
    href: "https://t.me/j2a1ckbot",
    icon: (
      <FontAwesomeIcon icon={faTelegram} className="h-5 w-max md:h-7 lg:h-7" />
    ),
    label: "Telegram",
  },
  {
    href: "https://github.com/j2a1ck",
    icon: (
      <FontAwesomeIcon icon={faGithub} className="h-5 w-max md:h-7 lg:h-7" />
    ),
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/in/j2a1ck/",
    icon: (
      <FontAwesomeIcon icon={faLinkedin} className="h-5 w-max md:h-7 lg:h-7" />
    ),
    label: "Linkedin",
  },
];

// SocialMedia component
const SocialMedia: React.FC = () => {
  return (
    // display social media icons and link to their sites
    <div className="flex justify-items-start">
      {SocialMediaLinks.map((link, index) => (
        <a className="px-2" key={index} href={link.href} target="_blank">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
