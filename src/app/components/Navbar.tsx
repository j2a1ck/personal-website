"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { href: "/", label: "Home" },
  { href: "/information", label: "Information" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navbarClass = () => {
    switch (pathname) {
      case "/":
        return "bg-black-lite";
      case "/projects":
        return "bg-indigo";
      default:
        return "bg-black-lite";
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`flex h-auto w-auto flex-wrap justify-center text-xs text-white md:text-sm lg:text-sm ${navbarClass()}`}
    >
      <div className="m-3 rounded-full border-4 border-black p-2">
        {Links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`m-auto rounded-lg px-2 py-1 font-extrabold hover:bg-sky-900 md:mx-5 lg:mx-5 ${
              isActive(href) ? "bg-slate-900" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
