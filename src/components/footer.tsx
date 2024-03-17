import {
  RiFacebookBoxFill,
  RiTwitterXLine,
  RiPinterestFill,
  RiInstagramLine,
} from "react-icons/ri";

const footerMenu = [
  {
    id: crypto.randomUUID().slice(0, 5),
    title: "Features",
    links: [
      { href: "#link-shortening", label: "Link Shortening" },
      { href: "#branded-links", label: "Branded Links" },
      { href: "#analytics", label: "Analytics" },
    ],
  },
  {
    id: crypto.randomUUID().slice(0, 5),
    title: "Resources",
    links: [
      { href: "#blog", label: "Blog" },
      { href: "#developers", label: "Developers" },
      { href: "#support", label: "Support" },
    ],
  },
  {
    id: crypto.randomUUID().slice(0, 5),
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#our-team", label: "Our Team" },
      { href: "#careers", label: "Careers" },
      { href: "#contact", label: "Contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-400 box-border p-12">
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start  justify-between px-4 lg:px-0 ">
        {/* logo */}
        <a href="#" className="hover:opacity-80 md:min-w-24 ">
          <img className="w-fit" src="images/logo-white.svg" alt="Shortly" />
        </a>

        <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start justify-center gap-12 flex-1 max-w-2xl">
          {footerMenu.map(({ title, links, id }) => (
            <div key={id} className="text-xs">
              <p className="font-bold text-white mb-2">{title}</p>
              <menu>
                {links.map(({ href, label }, i) => (
                  <li
                    className="text-neutral-200 hover:text-primary w-fit mx-auto md:mx-0 mb-1"
                    key={i}
                  >
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </menu>
            </div>
          ))}
        </div>
        <ul className="flex items-center gap-2 justify-self-end">
          <li>
            <a
              href="#shortly-fb"
              className="hover:text-primary text-white text-base"
            >
              <RiFacebookBoxFill size={24} />
            </a>
          </li>
          <li>
            <a
              href="#shortly-x"
              className="hover:text-primary text-white text-base"
            >
              <RiTwitterXLine size={24} />
            </a>
          </li>
          <li>
            <a
              href="#shortly-pint"
              className="hover:text-primary text-white text-base"
            >
              <RiPinterestFill size={24} />
            </a>
          </li>
          <li>
            <a
              href="#shortly-ig"
              className="hover:text-primary text-white text-base"
            >
              <RiInstagramLine size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
