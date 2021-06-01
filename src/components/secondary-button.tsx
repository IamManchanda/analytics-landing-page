import Link from "next/link";

function SecondaryButton({ href, text }) {
  return (
    <Link href={href}>
      <a className="px-5 py-2 ml-6 text-lg font-medium text-black duration-200 bg-white rounded-lg md:py-4 hover:bg-pir-gray-200 transitions-colors">
        {text}
      </a>
    </Link>
  );
}

export default SecondaryButton;
