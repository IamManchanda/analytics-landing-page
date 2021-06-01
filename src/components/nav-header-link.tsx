import Link from "next/link";

function NavHeaderLink({ href, text, isMobile = false }) {
  if (isMobile) {
    return (
      <li className="py-4 border-b-2 border-pir-gray-200">
        <Link href={href}>
          <a className="px-4 text-lg font-medium transition-colors duration-200 hover:text-pir-gray-600">
            {text}
          </a>
        </Link>
      </li>
    );
  }

  return (
    <li className="ml-6">
      <Link href={href}>
        <a className="font-medium">{text}</a>
      </Link>
    </li>
  );
}

export default NavHeaderLink;
