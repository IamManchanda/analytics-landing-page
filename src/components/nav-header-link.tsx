import Link from "next/link";

function NavHeaderLink({ href, text }) {
  return (
    <li className="ml-6">
      <Link href={href}>
        <a className="font-medium">{text}</a>
      </Link>
    </li>
  );
}

export default NavHeaderLink;
