import linkedin from "../../../public/linkedin.svg";
import telegram from "../../../public/telegram.svg";
import github from "../../../public/github.svg";
import discord from "../../../public/discord.svg";
import Image from "next/image";

const SocialMediaLinks = [
  { src: telegram, alt: "telegram", url: "https://t.me/j2a1ckbot" },
  { src: github, alt: "github", url: "https://github.com/j2a1ck" },
  {
    src: linkedin,
    alt: "linkedin",
    url: "https://www.linkedin.com/in/j2a1ck/",
  },
  {
    src: discord,
    alt: "discord",
    url: "https://discordapp.com/users/j2a1ck",
  },
];

// SocialMedia component
const SocialMedia: React.FC = () => {
  return (
    // display social media icons and link to their sites
    <div className="flex justify-items-start space-x-3">
      {SocialMediaLinks.map((link) => (
        <a
          href={link.url}
          key={link.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={link.src} alt={link.alt} width={30} height={30} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
