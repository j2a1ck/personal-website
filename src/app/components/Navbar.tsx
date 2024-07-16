import Link from "next/link"

const Links = [
  { href: "/", label: "home"} ,
  { href: "/skill", label: "skill"},
  { href: "/project", label: "project"},
  { href: "/contact", label: "contact"},
]

const Navbar: React.FC = () => {
  return <>
    <nav className="flex flex-wrap justify-center w-auto h-auto text-xl text-white">
     <div className="border-black border-4 rounded-full m-3 p-2">
      {Links.map(({ href, label: label }) => (
        <Link
          key={href}
          href={href}
          className="px-2 py-1 sm:m-1 md:mx-5 lg:mx-5 font-medium hover:bg-gray-800 rounded-lg "
        >
          {label}
        </Link>
      ))}
      </div>
    </nav>
    </>
  ;
}

export default Navbar