import Link from "next/link";

function NavFooterLink({ href, text }) {
  return (
    <li className="mt-2">
      <Link href={href}>
        <a className="transition-colors duration-200 text-pir-gray-500 hover:text-pir-gray-400">
          {text}
        </a>
      </Link>
    </li>
  );
}

export default NavFooterLink;
