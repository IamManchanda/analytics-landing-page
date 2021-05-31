import Link from "next/link";

function SecondaryButton({ href, text }) {
  return (
    <Link href={href}>
      <a className="px-5 py-4 ml-6 text-lg font-medium text-black duration-200 bg-white rounded-lg hover:bg-pir-gray-200 transitions-colors">
        {text}
      </a>
    </Link>
  );
}

export default SecondaryButton;
