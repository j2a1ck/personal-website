import Link from "next/link"

const Links = [
  { href: "/", label: "home"} ,
  { href: "/skill", label: "skill"},
  { href: "/contact", label: "contact"},
  { href: "/about", label: "about"},
]

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center w-auto h-10 p-1 text-xl text-purple-700">
      {Links.map(({href, label: label}) => (
        <Link key={href} href={href} className="mx-10">
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar