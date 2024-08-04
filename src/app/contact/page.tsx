"use client";

import Image from "next/image";
import ownerImage from "../../../public/ownerImage.jpg";
import linkedin from "../../../public/linkedin.svg";
import instagram from "../../../public/instagram.svg";
import telegram from "../../../public/telegram.svg";
import github from "../../../public/github.svg";
import discord from "../../../public/discord.svg";

const socialMediaLinks = [
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
  {
    src: instagram,
    alt: "instagram",
    url: "https://www.instagram.com/j2a1ck/",
  },
];

function handleClick(): void {
  alert("Email:   jack.70aw@gmail.com");
}

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="m-auto mt-6 flex h-44 w-44 justify-center overflow-hidden rounded-full md:h-40 md:w-40 lg:mt-4 lg:h-48 lg:w-48">
        <Image
          priority={true}
          src={ownerImage}
          alt="Owner"
          className="object-cover"
        />
      </div>
      <h1 className="flex justify-center pt-7 font-bold text-white-white lg:pt-3 lg:text-lg">
        Jack
      </h1>
      <h2 className="flex justify-center font-serif text-sm font-extralight text-white lg:text-sm">
        give me your hands son
      </h2>
      <div className="m-auto mt-7 flex w-48 justify-center justify-items-center space-x-2 lg:mt-5 lg:w-52">
        {socialMediaLinks.map((link) => (
          <a
            href={link.url}
            key={link.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={link.src} alt={link.alt} width={50} height={50} />
          </a>
        ))}
      </div>
      <div className="mt-20 flex justify-center font-serif text-sm text-white lg:mt-9">
        <a href="/cv.pdf" download="cv.pdf">
          <button className="h-7 w-44 rounded-3xl border bg-black-dark hover:bg-black lg:h-9 lg:w-56">
            Resume
          </button>
        </a>
      </div>
      <div className="mt-4 flex justify-center font-serif text-sm text-white lg:mt-2">
        <button
          onClick={handleClick}
          className="h-7 w-44 rounded-3xl border bg-black-dark hover:bg-black lg:h-9 lg:w-56"
        >
          Email
        </button>
      </div>
      <h3 className="mb-auto mt-24 font-sans text-white lg:mt-5"> other </h3>
      <div className="mt-3 flex justify-center font-serif text-sm text-white">
        <a href="https://t.me/ja9ck">
          <button className="h-8 w-44 rounded-3xl border bg-zinc-950 hover:bg-black lg:h-10 lg:w-56">
            Telegram channel
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
