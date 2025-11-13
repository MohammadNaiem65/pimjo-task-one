import Link from "next/link";

const footerLinks = [
  {
    title: "Resources",
    links: [
      {
        title: "Update Logs",
        href: "#",
      },
      {
        title: "Roadmap",
        href: "#",
      },
      {
        title: "Tailwind UI Component",
        href: "#",
      },
      {
        title: "Tailwind CSS",
        href: "#",
      },
      {
        title: "Tailwind Figma",
        href: "#",
      },
    ],
  },
  {
    title: "Useful Links",
    links: [
      {
        title: "License",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
      {
        title: "Refund Policy",
        href: "#",
      },
      {
        title: "Free Download",
        href: "#",
      },
      {
        title: "NPM Package",
        href: "#",
      },
    ],
  },
  {
    title: "Help & Support",
    links: [
      {
        title: "Support",
        href: "#",
      },
      {
        title: "Docs",
        href: "#",
      },
      {
        title: "Faqs",
        href: "#",
      },
      {
        title: "Community",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
    ],
  },
];

export default function Links() {
  return (
    <div className="grid grid-cols-3 gap-x-19.5">
      {footerLinks.map((column, index) => (
        <div key={index}>
          <h4 className="font-geist-mono text-base leading-6 text-text-secondary">
            {column.title}
          </h4>

          <ul className="mt-7 space-y-4.5">
            {column.links.map((link, index) => (
              <li
                key={index}
                className="text-base leading-6 text-text duration-300 hover:text-brand-500"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
