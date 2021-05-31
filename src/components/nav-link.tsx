import Link from "next/link";

function NavLink({ href, text }) {
  return (
    <li className="ml-6 font-medium">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  );
}

export default NavLink;
